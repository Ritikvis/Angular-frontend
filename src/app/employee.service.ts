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

  // Retrieves a list of employees
  getEmployeesList(): Observable<Employee[]> {
    console.log("Making HTTP GET request to: ", this.baseURL);
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  // Creates a new employee
  createEmployee(employee: Employee): Observable<Employee> {
    console.log("Making HTTP POST request to: ", this.baseURL);
    return this.httpClient.post<Employee>(this.baseURL, employee);
  }

  // Updates an existing employee
  updateEmployee(employee: Employee): Observable<Employee> {
    console.log("Making HTTP PUT request to update employee with ID:", employee.id);
    return this.httpClient.put<Employee>(`${this.baseURL}/${employee.id}`, employee);
  }

  // Retrieves a specific employee by ID
  getEmployeeById(id: number): Observable<Employee> {
    console.log("Making HTTP GET request to get employee with ID:", id);
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }
}