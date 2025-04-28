import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './pages/admission/admission.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'admission', component: AdmissionComponent },
  { path: '', redirectTo: '/admission', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
