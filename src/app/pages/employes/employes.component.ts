import { Component } from '@angular/core';
import { EmployFormComponent } from './employ-form/employ-form.component';
import { SharedModule } from '../../shared/shared.module';
import { Employ } from '../../core/model/employ.interface';
import { EmployListComponent } from './employ-list/employ-list.component';
import { EmployService } from './service/employ.service';

@Component({
  selector: 'app-employes',
  standalone: true,
  imports: [EmployFormComponent, EmployListComponent, SharedModule],
  templateUrl: './employes.component.html',
  styleUrl: './employes.component.scss'
})
export class EmployesComponent {
  employes: Employ[] = [];

  constructor(private employeeService:EmployService){

  }

  changeForm(showForm: boolean){
    this.employeeService.updateActiveForm(showForm);
  }
}
