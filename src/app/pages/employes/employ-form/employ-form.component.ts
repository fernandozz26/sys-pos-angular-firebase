import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Employ } from '../../../core/model/employ.class';
import { EmployService } from '../service/employ.service';

@Component({
  selector: 'app-employ-form',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './employ-form.component.html',
  styleUrl: './employ-form.component.scss',
})
export class EmployFormComponent implements OnInit {
  employReactiveForm!: FormGroup;
  employsData!: Employ[];
  firsName!: string;
  lastName!: string;
  email!: string;
  birthdate: Date = new Date();
  phone!: number;

  constructor(
    private formBuilder: FormBuilder,
    private employService: EmployService
  ) {
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
  }

  saveEmploy(): boolean {
    if (
      this.employReactiveForm.get('nombre')?.valid &&
      this.employReactiveForm.get('apellido')?.valid &&
      this.employReactiveForm.get('email')?.valid &&
      this.employReactiveForm.get('fecha')?.valid &&
      this.employReactiveForm.get('telefono')?.valid
    ) {
      let employ:Employ = 
        new Employ(
          this.employReactiveForm.get('nombre')?.value,
          this.employReactiveForm.get('apellido')?.value,
          this.employReactiveForm.get('email')?.value,
          this.employReactiveForm.get('fecha')?.value,
          this.employReactiveForm.get('telefono')?.value
        );
      
      this.employService.updateEmployesData(employ);
      
      return true;
    } else {
      return false;
    }
  }
}
