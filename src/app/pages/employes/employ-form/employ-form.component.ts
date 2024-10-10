import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Employ } from '../../../core/model/employ.model';
import { EmployService } from '../service/employ.service';
import { DatePipe } from '@angular/common';
import e from 'express';

@Component({
  selector: 'app-employ-form',
  standalone: true,
  imports: [SharedModule],
  providers:[DatePipe],
  templateUrl: './employ-form.component.html',
  styleUrl: './employ-form.component.scss',
})
export class EmployFormComponent implements OnInit {
  employReactiveForm!: FormGroup;
  employsData!: Employ[];
  showForm!:boolean;
  selectedEmployee!: Employ;
  constructor( private formBuilder: FormBuilder,  private employService: EmployService,  private datePipe: DatePipe) {
    this.employReactiveForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fecha: [new Date(), [Validators.required]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    });
  }

  ngOnInit(): void {
    this.employService.employesData$.subscribe((data) => {
      this.employsData = data;
    });
    this.employService.activeForm$.subscribe( (data) => {
      this.showForm = data;
    });

    this.employService.selectedEmployee$.subscribe((employ) => {
      
      this.selectedEmployee = employ;
      if(this.selectedEmployee != null){
        if(Object.keys(this.selectedEmployee).length > 0){
          let birthdateEmployee =  this.datePipe.transform( this.selectedEmployee.birthdate, 'fullDate', 'es-MX' );
          this.employReactiveForm.setValue({
            nombre: this.selectedEmployee.firsName,
            apellido: this.selectedEmployee.lastName,
            email: this.selectedEmployee.email,
            fecha: new Date(birthdateEmployee != null ? birthdateEmployee : 0),
            telefono: this.selectedEmployee.phone
          });
        }
      }
    })
    
  }

  saveEmploy(): boolean {
    if (this.employReactiveForm.get('nombre')?.valid && this.employReactiveForm.get('apellido')?.valid && this.employReactiveForm.get('email')?.valid && this.employReactiveForm.get('fecha')?.valid && this.employReactiveForm.get('telefono')?.valid) {

      let birthdateEmployee =  this.datePipe.transform( this.employReactiveForm.get('fecha')?.value, 'fullDate', 'es-MX' );
      let employ:Employ = 
        {
          firsName:this.employReactiveForm.get('nombre')?.value,
          lastName:this.employReactiveForm.get('apellido')?.value,
          email:this.employReactiveForm.get('email')?.value,
          birthdate:  birthdateEmployee != null ? birthdateEmployee : "None",
          phone:this.employReactiveForm.get('telefono')?.value
        };

      if(Object.keys(this.selectedEmployee).length > 0){
        this.employService.updateEmployee(this.selectedEmployee, employ);
        this.resetSelectedForm(false);
      }else{
        this.employService.saveEmployesData(employ);
      }
      return true;
    } else {
      return false;
    }
  }

  resetSelectedForm(showForm:boolean):void{
    if(Object.keys(this.selectedEmployee).length > 0){
      this.employService.updateSelectedEmployee({}, showForm);
    }
  }
  
  changeForm(showForm: boolean): void{
    this.employService.updateActiveForm(showForm);
  }
  
}
