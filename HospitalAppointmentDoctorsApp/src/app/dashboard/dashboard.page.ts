import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public navCtlr: NavController,private auth:AuthService) {

  }

  ngOnInit() {
  }
  onClick() {
    console.log("Clicked");
  }
  user = null;
  ionViewWillEnter() {
    this.user = this.auth.getUser();
  }
  logout() {
    this.auth.logout();
  }
}
