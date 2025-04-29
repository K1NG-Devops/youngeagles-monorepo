import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FormComponent } from './pages/form/form.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [

{path: 'login', component: LoginComponent},
{path:'form', component: FormComponent},
{path: 'register', component: RegisterComponent},
{path: 'landing', component: LandingComponent},
];
