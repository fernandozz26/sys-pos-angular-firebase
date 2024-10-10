import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employ } from '../../../core/model/employ.model';
import {
  ref,
  remove as removeEmployee,
  set as saveEmployee,
  onValue as getEmployees,
  getDatabase,
} from '@angular/fire/database';
import { FirebaseApp } from '@angular/fire/app';
import e from 'express';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class EmployService {
  private employes: Employ[] = [];

  private fireApp: FirebaseApp = inject(FirebaseApp);

  private dataBase = getDatabase(this.fireApp);
  private employeesRef = ref(this.dataBase, 'employes');

  private employeesDataFirebase$: BehaviorSubject<Employ[]> = new BehaviorSubject<Employ[]>(this.employes);

  private employeesForm$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private selectedEmployeeOfList$: BehaviorSubject<Employ> = new BehaviorSubject<Employ>({});

  private snackBar = inject(MatSnackBar);
  
  constructor() {
    getEmployees(this.employeesRef, (snapshot) => {
      this.employes = snapshot.val();
      this.employeesDataFirebase$.next(this.employes);
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  updateActiveForm(showForm:boolean):void{
    this.employeesForm$.next(showForm);
  }

  get employesData$(): Observable<Employ[]> {
    return this.employeesDataFirebase$.asObservable();
  }

  get activeForm$():Observable<boolean> {
    return this.employeesForm$.asObservable();
  }

  get selectedEmployee$(): Observable<Employ>{
    return this.selectedEmployeeOfList$.asObservable();
  }

  updateSelectedEmployee(employ: Employ, showForm:boolean = true) :void{
    this.selectedEmployeeOfList$.next(employ);
    this.employeesForm$.next(showForm);
  }

  updateEmployee(oldEmployee: Employ, employee: Employ):void{
    this.employes = this.employeesDataFirebase$.getValue();
    let index = this.employes.indexOf(oldEmployee);
    this.employes.splice(index, 1, employee);
    saveEmployee(this.employeesRef, this.employes);
    this.employeesDataFirebase$.next(this.employes);
    this.openSnackBar("Empleado actualizado","OK");
  }

  saveEmployesData(employ: Employ): void {
    this.employes = this.employeesDataFirebase$.getValue();
    this.employes.push(employ);

    try {
      saveEmployee(this.employeesRef, this.employes);
      this.employeesDataFirebase$.next(this.employes);
      this.openSnackBar("Empleado Guardado","OK");
    } catch (e) {
      console.log(e);
    }
  }

  deleteEmployee(employ: Employ){
    if(this.employes.length > 0){
      let index = this.employes.indexOf(employ)

      const employRef = ref(this.dataBase, `employes/${index}`)
      removeEmployee(employRef);
      this.employes.splice(index, 1);
      this.employeesDataFirebase$.next(this.employes);
      this.openSnackBar("Empleado Eliminado","OK");
    }
  }

 
}
