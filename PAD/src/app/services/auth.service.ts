import { Injectable } from '@angular/core';
import { User } from '../interface/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController } from '@ionic/angular';

import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Usuario } from '../interface/user.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private UsuarioCollection: AngularFirestoreCollection<Usuario>;
  private Usuarios: Observable<Usuario[]>;

  
  public user$: Observable<User>;
  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router,private menu: MenuController) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );

   }
  
  verficarTipo(correo:string){
    this.UsuarioCollection = this.afs.collection<Usuario>('users', ref => ref.where('correo', '==', correo));
    this.Usuarios = this.UsuarioCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
    return this.Usuarios;
    
  }


  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }
  async register(nombre: string, apellido: string, email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      const uid = user.uid;
      const correo = user.email;
      
      this.afs.collection('users').doc(uid).set({
        uid : uid,
        correo : correo,
        tipo : "Invitado",
        nombre: nombre,
        apellido: apellido
        
      })
      await this.sendVerifcationEmail();
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async logout(): Promise<void> {
    try {
      //await this.afAuth.signOut();
      await this.afAuth.signOut().then(() => {
        this.menu.enable(false, 'first');
        this.router.navigate(['/login']);
      })
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async sendVerifcationEmail(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log('Error->', error);
    }
  }

  isEmailVerified(user: User): boolean {
    return user.emailVerified === true ? true : false;
  }

}
