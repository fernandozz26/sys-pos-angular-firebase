import { ChangeDetectionStrategy, Component, OnInit, signal, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LoginService } from '../../shared/service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit{
  
  hide:any = signal(true);
  loginForm!: FormGroup;
  
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,){

      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

  ngOnInit(): void {
    if (typeof sessionStorage !== 'undefined') {
      let token : string | null= sessionStorage.getItem('userToken');
      this.loginService.setToken(token);
    }
     
   
     
  }

  passwordEyeHandler(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  login(){
    this.loginService.doLogin(this.loginForm.get("email")?.value, this.loginForm.get("password")?.value);
  }

  
}
