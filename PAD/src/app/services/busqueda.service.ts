import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Busqueda } from '../interface/user.interface';
import { Usuario } from '../interface/user.interface';
import { Pais } from '../interface/user.interface';
@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  private busquedaCollection: AngularFirestoreCollection<Busqueda>;
  private busqueda: Observable<Busqueda[]>;
  private todosCollection: AngularFirestoreCollection<Usuario>;
  private todos: Observable<Usuario[]>;
  private paisCollection: AngularFirestoreCollection<Pais>;
  private paises: Observable<Pais[]>;
  constructor(private db:AngularFirestore) {
    
   }
   getBusqueda(){

    this.busquedaCollection = this.db.collection<Busqueda>('busqueda');
    this.busqueda = this.busquedaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
    return this.busqueda;
  }

  getUsuario(){
    this.todosCollection = this.db.collection<Usuario>('users');
    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
    console.log(this.todos);
    return this.todos;
  }

  getPais(){
    this.paisCollection = this.db.collection<Pais>('paises');
    this.paises = this.paisCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
    console.log(this.todos);
    return this.paises;
  }
 
}
