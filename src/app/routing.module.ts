import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './components/signup/signup.component';
import { PasswordComponent } from './components/password/password.component';
import { SigninComponent } from './components/signin/signin.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'createpassword',
    component: PasswordComponent
  },
  {
    path: 'home',
    component: ToolbarComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'resetpassword',
    component: PasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
