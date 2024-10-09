import { Injectable } from '@angular/core';
import  * as employesJson from '../../../core/json/employes.json';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employ } from '../../../core/model/employ.class';

@Injectable({
  providedIn: 'root'
})
export class EmployService {

  private employesData: Employ[]  = (employesJson as any).employes;

  public employesSubject$ = new BehaviorSubject<Employ[]>(
    this.employesData
  );

  get employesData$(): Observable<Employ[]>{
    return this.employesSubject$.asObservable();
  }

  updateEmployesData(employ:Employ) : void{
    this.employesData =this.employesSubject$.getValue();
    this.employesData.push(employ);
    this.employesSubject$.next(this.employesData);
  }
}
