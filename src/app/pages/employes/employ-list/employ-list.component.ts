import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { EmployService } from '../service/employ.service';
import { Employ } from '../../../core/model/employ.class';
import {  MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employ-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './employ-list.component.html',
  styleUrl: './employ-list.component.scss',
})


export class EmployListComponent implements OnInit{
  dataSoruce = new MatTableDataSource<Employ>();
  displayedColumns:string[] = ['Nombre', 'Apellido', 'Email', 'Fecha_Nacimiento', 'Telefono'];
  
  constructor(private employService:EmployService){
    
  }

  ngOnInit(): void {
    this.employService.employesSubject$.subscribe(data => {
      this.dataSoruce.data = data;
      
    })
  }
  
  

  

  



}
