import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  api="http://localhost:8080/api/employees"
  constructor(private http:HttpClient) { }

   getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.api}`)
  }

   addEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.api}/add`,employee);
  }

   deleteEmployee(id:number){
    return this.http.delete(`${this.api}/${id}`);
  }

  updateEmployee(id:number,employee:Employee):Observable<Object>{
    return this.http.put(`${this.api}/${id}`,employee);
  }

  getEmpById(id:number):Observable<Object>{
    return this.http.get<Employee>(`${this.api}/${id}`);

  }
}
