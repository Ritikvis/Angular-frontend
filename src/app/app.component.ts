import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employee: any = { emailId: '' }; // Define 'employee' property here
  title = 'Full Stack Application';
}