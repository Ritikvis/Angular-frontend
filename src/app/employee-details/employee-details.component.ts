import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Route } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'] // <-- Corrected property name
})
export class EmployeeDetailsComponent implements OnInit {
  id: number | undefined;
  employee!: Employee;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] as number;
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });
  }
}