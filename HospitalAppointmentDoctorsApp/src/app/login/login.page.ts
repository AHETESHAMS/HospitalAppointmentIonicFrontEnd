import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;

  credentials = {
    emailId: "shritejmayekar69@gmail.com",
    password: "admin@123",
    phNumber:""
  };
 
  constructor(
    private formBuilder:FormBuilder,
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) {

    this.loginForm = this.formBuilder.group({
      emailId: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }
  
 
  ngOnInit() {}
  
 
  login() {
    this.auth.login(this.loginForm.value).subscribe(res => {
      if (res) {
        this.router.navigateByUrl('/dashboard');
      } else {
        this.alertCtrl.create({
          header: 'Login Failed',
          message: 'Wrong credentials.',
          buttons:['Ok']
        }).then(alert => alert.present());
        this.router.navigateByUrl('/');
      }
    });
  }
 
}