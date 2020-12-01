import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Busqueda } from '../interface/user.interface';
import { Usuario } from '../interface/user.interface';
import { Pais } from '../interface/user.interface';
import { BusquedaService } from '../services/busqueda.service';
@Component({
  selector: 'app-buscarusugeopais',
  templateUrl: './buscarusugeopais.page.html',
  styleUrls: ['./buscarusugeopais.page.scss'],
})
export class BuscarusugeopaisPage implements OnInit {
  todos: Busqueda[];
  usuarios: Usuario[];
  paises:Pais[];
   
 
  
  constructor(private menu: MenuController,private Service: BusquedaService) {
    this.menu.enable(false, 'first');
    this.menu.enable(true, 'custom');
    //console.log(this.usuarios[0]);
   }

  ngOnInit() {
    this.Service.getBusqueda().subscribe((todos) =>{
      this.todos = todos;
      console.log(this.todos[0]);
    })

    this.Service.getUsuario().subscribe((todos) =>{
      this.usuarios = todos;
    })

    this.Service.getPais().subscribe((todos) =>{
      this.paises = todos;
      console.log(this.todos[0]);
    })
  }

}
