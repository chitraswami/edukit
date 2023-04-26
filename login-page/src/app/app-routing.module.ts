import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({ declarations: [
  DashboardComponent,
  LoginComponent,
  RegisterComponent,
  ProfileComponent

],
  imports: [BrowserModule,ReactiveFormsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule,ReactiveFormsModule,FormsModule]
})
export class AppRoutingModule {}
