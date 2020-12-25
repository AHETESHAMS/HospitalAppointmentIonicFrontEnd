import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  credentials = {
    emailId: "shritejmayekar69@gmail.com",
    password: "admin@123",
    phNumber:""
  };
 
  constructor(
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}
 
  ngOnInit() {}
 
  login() {
    this.auth.login(this.credentials).subscribe(res => {
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