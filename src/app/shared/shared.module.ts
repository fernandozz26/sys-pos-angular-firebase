import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployService } from '../pages/employes/service/employ.service';
import { LoginService } from './service/login.service';


@NgModule({
    declarations: [],
    imports: [
        MaterialModule,  
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[
        MaterialModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers:[]
})

export class SharedModule{}