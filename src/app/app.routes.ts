import { Routes } from '@angular/router';
import { SalesComponent } from './pages/sales/sales.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployesComponent } from './pages/employes/employes.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './core/guard/login.guard';

export const routes: Routes = [
    {path:"sales", component: SalesComponent , canActivate: [LoginGuard]},
    {path:"home", component:HomeComponent, canActivate: [LoginGuard]},
    {path:"employ", component:EmployesComponent, canActivate: [LoginGuard]},
    {path:"login", component: LoginComponent},
    {path:"**", redirectTo:"login"}
];
