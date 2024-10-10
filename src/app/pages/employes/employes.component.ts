import { Component, OnInit } from '@angular/core';
import { EmployFormComponent } from './employ-form/employ-form.component';
import { SharedModule } from '../../shared/shared.module';
import { Employ } from '../../core/model/employ.model';
import { EmployListComponent } from './employ-list/employ-list.component';
import { EmployService } from './service/employ.service';

@Component({
  selector: 'app-employes',
  standalone: true,
  imports: [EmployFormComponent, EmployListComponent, SharedModule],
  templateUrl: './employes.component.html',
  styleUrl: './employes.component.scss'
})
export class EmployesComponent implements OnInit {
  employes!: Employ[];
  selectedEmployee!: Employ;
  constructor(private employeeService:EmployService){

  }
  ngOnInit(): void {
    this.employeeService.employesData$.subscribe(employess => {this.employes = employess})
    this.employeeService.selectedEmployee$.subscribe(employ => {this.selectedEmployee = employ});
  }

  resetSelectedForm(showForm:boolean):void{
    if(Object.keys(this.selectedEmployee).length > 0){
      this.employeeService.updateSelectedEmployee({}, showForm);
    }
  }

}
