import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interface/user.interface';
import { UsuarioService } from '../services/usuario.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  todos: Usuario[];
  constructor(private todoService: UsuarioService,private menu: MenuController) {
    this.menu.enable(false, 'first');
    this.menu.enable(true, 'custom');
   }

  ngOnInit() {
    this.todoService.getUsuarios().subscribe((todos) =>{
      this.todos = todos;
      
    })
  }

  onRemove(idTask:string){
    this.todoService.removeTodo(idTask);
  }

}
