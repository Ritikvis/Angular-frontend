import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'; // Make sure to import your Employee model if you have one
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  
  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    // Initialization logic, if any, can go here
  }

  saveEmployee(): void {
    this.employeeService.createEmployee(this.employee).subscribe(
      data => {
        console.log(data);
        this.goToEmployee();
      },
      error => {
        console.log(error);
        // Handle error appropriately, e.g., display an error message
      }
    );
  }

  goToEmployee(): void {
    this.router.navigate(['/employees']);
  }

  onSubmit(): void {
    console.log(this.employee);
    this.saveEmployee();
  }
}