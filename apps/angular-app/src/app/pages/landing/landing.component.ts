import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  // ✅ Add this method inside the class
  goToReactHome() {
    window.location.href = '/home'; // proxy will handle redirect
  }

}
