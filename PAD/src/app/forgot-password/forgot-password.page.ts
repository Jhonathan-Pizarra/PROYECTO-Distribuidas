import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
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
  
    // Añado Propiedades al Form
    this.formGroup = this.formBuilder.group({emailControl });
  }

  async onResetPassword(email) {
    try {
      await this.authSvc.resetPassword(email.value);
      alert("Revisar su correo se envió un mensaje para cambiar contraseña.");
      this.router.navigate(['/login']);
    } catch (error) {
      console.log('Error->', error);
    }
  }

}
