import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'Login', component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'', redirectTo:'Login', pathMatch:'full'},
  {path:'Home',component:HomeComponent,canActivate: [AuthGuard]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
