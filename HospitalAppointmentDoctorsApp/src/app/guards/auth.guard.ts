import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router,private alertCtrl:AlertController){

  }
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.auth.user.pipe(
      take(1),
      map(user => {
        console.log('in can activate',user);
        if(!user) {
          this.alertCtrl.create({
            header:'Unauthorized',
            message:'your not allowed to access the page',
            buttons:['Ok']
          }).then(alert => alert.present());
          this.router.navigateByUrl('/');
          return false;
        } else {
          return true;
        }
      })
      
    )
  }
  isLoggedIn(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.auth.user.pipe(
      take(1),
      map(user => {
        console.log('in can activate',user);
        if(!user) {
         
          this.router.navigateByUrl('/');
          return false;
        } else {
          this.router.navigateByUrl('/dashboard');
          return true;
        }
      })
      
    )
  }
}
