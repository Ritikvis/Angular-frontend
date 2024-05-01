import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    console.log("Making HTTP GET request to: ", this.baseURL);
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    console.log("Making HTTP POST request to: ", this.baseURL);
    return this.httpClient.post<Employee>(this.baseURL, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.baseURL}/${employee.id}`;
    console.log("Making HTTP PUT request to: ", url);
    return this.httpClient.put<Employee>(url, employee);
  }
}