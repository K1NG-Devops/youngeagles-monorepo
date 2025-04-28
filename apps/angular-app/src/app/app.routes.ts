import { Routes } from '@angular/router';
import { AdmissionComponent } from './pages/admission/admission.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: 'admission', component: AdmissionComponent },
  { path: '', redirectTo: 'admission', pathMatch: 'full' },
  {path:'login', component: LoginComponent}
];
