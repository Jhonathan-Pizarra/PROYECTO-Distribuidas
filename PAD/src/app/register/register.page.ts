import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formGroup: FormGroup; 
  constructor(private authSvc: AuthService, private router: Router,private menu: MenuController,public formBuilder: FormBuilder) { 
    this.menu.enable(false, 'first');
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
    const nombreControl = new FormControl('', Validators.compose([
      Validators.required,
    ]));
    const apellidoControl = new FormControl('', Validators.compose([
      Validators.required,
    ]));
    // Añado Propiedades al Form
    this.formGroup = this.formBuilder.group({emailControl,passwordControl,nombreControl,apellidoControl });
  }
  async onRegister(nombre,apellido,email, password) {
    try {
      const user = await this.authSvc.register(nombre.value,apellido.value,email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error', error);
    }
  }

  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }

}
