import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authservice : AuthService, private router: Router,private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  salir(){
    this.authservice.logout();
    this.menu.enable(false, 'custom');
    this.menu.enable(false, 'custom');
    
  }

  pagbuscar(){
    this.router.navigate(['buscar']);
    this.menu.enable(false, 'first');
    this.menu.enable(true, 'first');
  }

  paghome(){
    this.router.navigate(['home']);
    this.menu.enable(false, 'first');
    this.menu.enable(true, 'first');
  }
  usuarios(){
    this.menu.enable(false, 'custom');
    this.menu.enable(true, 'custom');
    this.router.navigate(['usuarios']);

  }
  uscarusugeob(){
    this.menu.enable(false, 'custom');
    this.menu.enable(true, 'custom');
    this.router.navigate(['buscarusugeo']);
  }
  buscarusugeopais(){
    this.menu.enable(false, 'custom');
    this.menu.enable(true, 'custom');
    this.router.navigate(['buscarusugeopais']);
  }


}
