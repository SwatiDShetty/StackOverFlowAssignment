import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'home', component: AppComponent, canActivate : [AuthGuard] },
  { path: 'login', component : LoginComponent},
  { path: 'dashboard', component : DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }