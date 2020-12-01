import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../interface/user.interface';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private todosCollection: AngularFirestoreCollection<Usuario>;
  private todos: Observable<Usuario[]>;

  constructor(db:AngularFirestore) { 
    this.todosCollection = db.collection<Usuario>('users');
    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
    


    
    
  }

  getUsuarios(){
    return this.todos;
  }

  getUsuario(id: string){
    return this.todosCollection.doc<Usuario>(id).valueChanges();
  }

  updateUsuario(todo:Usuario, id: string){
    return this.todosCollection.doc(id).update(todo);
  }
  
  addUsuario(todo: Usuario){
    return this.todosCollection.add(todo);
  }
  
  removeTodo(id: string){
    return this.todosCollection.doc(id).delete();
  }
}
