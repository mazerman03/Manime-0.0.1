import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { SignUpPage } from '../sign-up/sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'sign-up',
    component: SignUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
