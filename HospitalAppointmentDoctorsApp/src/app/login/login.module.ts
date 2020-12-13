import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { MaterialModule } from '../material.module';
import { Router } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    MaterialModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {
  constructor(private router: Router) {}
  login()
  {
    console.log("Inside login");
    this.router.navigate(['/dashboard']);
  }
}
