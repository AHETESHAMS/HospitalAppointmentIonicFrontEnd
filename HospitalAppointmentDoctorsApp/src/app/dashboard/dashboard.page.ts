import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public navCtlr:NavController) {
    
   }

  ngOnInit() {
  }
onClick()
{
  console.log("Clicked");
}
}
