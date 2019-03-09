import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { firebaseConfig } from './config'
import { FirebaseServiceService } from './shared/firebase-service.service';
import { DemoComponent } from './demo/demo.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase/app';
import { RaceHorseListComponent } from './race-horse-list/race-horse-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule,MatFormFieldModule, MatCardModule, MatCommonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RaceHorseDataComponent } from './race-horse-data/race-horse-data.component';
firebase.initializeApp(firebaseConfig.setting);

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    RaceHorseListComponent,
    RaceHorseDataComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    MatCommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    FlexLayoutModule,
    //  AngularFireModule.initializeApp(firebaseConfig.setting),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
  ],
  providers: [FirebaseServiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
