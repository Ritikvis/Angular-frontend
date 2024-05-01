import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'; // Import the Employee model if you have one
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
      (data: Employee) => {
        console.log('Employee created:', data);
        this.goToEmployee();
      },
      (error: any) => {
        console.error('Error creating employee:', error);
        // Handle error appropriately, e.g., display an error message
      }
    );
  }

  goToEmployee(): void {
    this.router.navigate(['/employees']);
  }

  onSubmit(): void {
    console.log('Submitted employee:', this.employee);
    this.saveEmployee();
  }
}