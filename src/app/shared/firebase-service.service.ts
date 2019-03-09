import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  private db: DatabaseReference;
  constructor() {
    this.db = firebase.database().ref();
  }

  eventListeners() {
    console.log('in init');
    var usersRef = this.db.child('users');

    usersRef.on('child_added', (snapshot) => {
      console.log('user was added !!');
    });

    usersRef.on('child_removed', (snapshot) => {
      console.log('user was removed !!');
    });


    usersRef.on('child_changed', (snapshot) => {
      console.log('user was changed !!');
    });

  }
}
