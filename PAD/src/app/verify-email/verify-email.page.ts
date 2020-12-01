import { User } from '../interface/user.interface';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {
  user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService,private menu: MenuController) {
    this.menu.enable(false, 'first');
   }

  ngOnInit() {
  }
  async onSendEmail(): Promise<void> {
    try {
      await this.authSvc.sendVerifcationEmail();
    } catch (error) {
      console.log('Error->', error);
    }
  }

  ngOnDestroy(): void {
    this.authSvc.logout();
  }

}
