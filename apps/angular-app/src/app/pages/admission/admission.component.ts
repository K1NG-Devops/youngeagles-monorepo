import { Component } from '@angular/core';

@Component({
  selector: 'app-admission',
  standalone: true,
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent {
  currentYear = new Date().getFullYear();
}
