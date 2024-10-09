import { Injectable, OnInit, inject } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { enviroment } from '../../../enviroments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements OnInit {
  private token!: string | null;
  private snackBar = inject(MatSnackBar);
  public isAuthenticated$ = new BehaviorSubject<boolean>(this.token != null);

  constructor(private router: Router) {
    initializeApp(enviroment);
  }
  ngOnInit(): void {
    
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  setToken(token: string | null) {
    this.token = token;
    if (this.token != null) {
      sessionStorage.setItem('userToken', this.token);
      this.isAuthenticated$.next(this.token != null);
      this.router.navigate(['/home']);
    }
  }

  doLogin(email: string, password: string): any {
    signInWithEmailAndPassword(getAuth(), email, password).then(
      (response) => {
        getAuth()
          .currentUser?.getIdToken()
          .then(
            (userToken) => {
              this.token = userToken;
              sessionStorage.setItem('userToken', this.token);
              this.isAuthenticated$.next(this.token != null);
              this.router.navigate(['/home']);
            },
            (error) => {
              this.isAuthenticated$.next(false);
              this.openSnackBar('Error al obtener el usuario', 'OK');
              console.log('error al obtener el usuario', error);
            }
          );
      },
      (erro) => {
        this.openSnackBar(
          'Error al iniciar sesión favor de validar correo y contraseña',
          'OK'
        );
        console.log(
          'Error al iniciar sesión favor de validar correo y contraseña',
          erro
        );
      }
    );
  }

  doSignOut(): any {
    signOut(getAuth())
      .then((response) => {
        this.token = null;
        sessionStorage.removeItem("userToken")
        this.isAuthenticated$.next(false);
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        this.openSnackBar('Error al cerrar sesion', 'OK');
      });
  }
}
