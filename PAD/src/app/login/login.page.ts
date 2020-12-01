import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { MenuController } from '@ionic/angular';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Usuario } from '../interface/user.interface';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  todos: Usuario[];
  formGroup: FormGroup; 
  correo ="";
  contr="";
  constructor(private authSvc: AuthService, private router: Router,private menu: MenuController,private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,public formBuilder: FormBuilder) {
      this.menu.enable(false, 'first');
      this.menu.enable(false, 'custom');
      this.crearvalidaciones();
   }

  ngOnInit() {
   
  }

  crearvalidaciones(){
    // Campo Contraseña
    const emailControl = new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,

    ]));
    const passwordControl = new FormControl('', Validators.compose([
      Validators.required,
    ]));
    // Añado Propiedades al Form
    this.formGroup = this.formBuilder.group({emailControl,passwordControl });
  }

  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified,email.value);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  private redirectUser(isVerified: boolean, correo:string): void {
    if (isVerified) {
      this.authSvc.verficarTipo(correo).subscribe((todos) =>{
        this.todos = todos;
        this.correo ="";
        this.contr="";
          if(this.todos[0].tipo=="Invitado"){
            this.router.navigate(['home']);
          }else{
            this.router.navigate(['usuarios']);
          }
      });
      
    } else {
      this.router.navigate(['verify-email']);
    }
  }

}
