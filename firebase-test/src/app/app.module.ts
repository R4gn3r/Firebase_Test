import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DialogComponent } from './dialog/dialog.component';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { environment } from '../environments/environment';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp({"projectId":"test-f510d",
                                            "appId":"1:262876494527:web:ba97fdc1b6d6acf62c640a",
                                            "storageBucket":"test-f510d.appspot.com",
                                            "apiKey":"AIzaSyBlW_j3D7n8E8TYe_taFQ1ibYstbytMbJE",
                                            "authDomain":"test-f510d.firebaseapp.com",
                                            "messagingSenderId":"262876494527",
                                            "measurementId":"G-Y15SJNCCD0"})),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
