import { Injectable, Inject } from '@angular/core';
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
    auth = Inject(AngularFireAuth);

  constructor() { }
}
