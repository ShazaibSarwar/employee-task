import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {EmployeeDto} from '../dto/employee.dto';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) { }

  // employee: EmployeeDto[] = []
  public employeesSubject: BehaviorSubject<EmployeeDto[]> = new BehaviorSubject<EmployeeDto[]>([])

  getEmployees(): Observable<EmployeeDto[]> {
    return this.http.get<EmployeeDto[]>('assets/sample-data/employee-data.json')
  }

}
