import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Busqueda } from '../interface/user.interface';
import { Usuario } from '../interface/user.interface';
import { BusquedaService } from '../services/busqueda.service';

@Component({
  selector: 'app-buscarusugeo',
  templateUrl: './buscarusugeo.page.html',
  styleUrls: ['./buscarusugeo.page.scss'],
})
export class BuscarusugeoPage implements OnInit {
  todos: Busqueda[];
  usuarios: Usuario[];
  
  constructor(private menu: MenuController,private Service: BusquedaService) { 
    this.menu.enable(false, 'first');
    this.menu.enable(true, 'custom');
    
  }

  ngOnInit() {
    this.Service.getBusqueda().subscribe((todos) =>{
      this.todos = todos;
  
    })

    this.Service.getUsuario().subscribe((todos) =>{
      this.usuarios = todos;
    })
  }

}
