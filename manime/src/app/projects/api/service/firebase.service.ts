import { Injectable, Inject, inject } from '@angular/core';
import { user } from 'src/models/user-data.model';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  auth = inject(AngularFireAuth);
  firestore= inject (AngularFirestore);
  utilsSvc = inject( UtilsService);
  storage= inject(AngularFireStorage);


  /*=====================   Acceder ===============*/

  getAuth(){
    return getAuth();
  }

  signIn(user: user) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  /*=====================   Registrar Usuario   ===============*/
  signUp(user: user) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  /*=====================   Actualizar Usuario   ===============*/
  updateUser(displayName:string) {
    return updateProfile(getAuth().currentUser, { displayName });
  }

  /*=====================  Restablecer Password   ===============*/
  sendRecoveryEmail(email: string){
    return sendPasswordResetEmail(getAuth(), email);
  }

  /*=====================  Cerrar Sesión   ===============*/
  signOut(){
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSvc.routerLink('/auth')
  }

}
