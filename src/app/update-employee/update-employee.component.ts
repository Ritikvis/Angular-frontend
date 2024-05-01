import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id?: number; // Make the id variable optional

  employee: Employee = new Employee(); 
 

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    // Use optional chaining operator (?) to handle undefined id
    this.id = this.route.snapshot.params['id']; 
    if (this.id !== undefined) {
      this.employeeService.getEmployeeById(this.id).subscribe(data => {
        this.employee = data;
      }, error => {
        console.log(error);
      });
    }
  }

  onSubmit(): void {
    if (this.id !== undefined) {
      this.employeeService.updateEmployee(this.employee).subscribe(updatedEmployee => {
        console.log("Employee updated successfully:", updatedEmployee);
        this.router.navigate(['/employees']); // Redirect to the employee list after update
      }, error => {
        console.log(error);
      });
    }
  }
}