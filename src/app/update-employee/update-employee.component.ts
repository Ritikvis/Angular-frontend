import { Component } from '@angular/core';
import { Employee } from '../employee'; // Import the Employee model if you have one
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  employee: Employee = new Employee(); // Define the 'employee' property here

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) {
    this.employee.id = this.route.snapshot.params['id']; // Assuming you're using route parameters to get the employee ID
  }

  // Implement methods for updating the employee
}