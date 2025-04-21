import { Routes } from '@angular/router';
import { AdmissionComponent } from './pages/admission/admission.component';

export const routes: Routes = [
  { path: 'admission', component: AdmissionComponent },
  { path: '', redirectTo: 'admission', pathMatch: 'full' }
];
