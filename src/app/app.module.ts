import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule, DatePipe } from "@angular/common";
import {
  AngularFireStorageModule,
  AngularFireStorage,
} from "@angular/fire/storage";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import {
  JwtModule,
  JwtModuleOptions,
  JwtHelperService,
  JWT_OPTIONS,
} from "@auth0/angular-jwt";
import { LoginComponent } from "./client/pages/login/login.component";
import { SignupComponent } from "./client/pages/signup/signup.component";
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from './material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { Error500Component } from './admin/examples/error500/error500.component';
import { Error404Component } from './admin/examples/error404/error404.component';
import { BlankpageComponent } from './admin/examples/blankpage/blankpage.component';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    Error500Component,
    Error404Component,
    BlankpageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatListModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialModule,
    MatDialogModule,
    MatCardModule,
    MatRippleModule,
    MatRadioModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "learning"),
    MDBBootstrapModule.forRoot(),
    // JwtModule.forRoot(JWT_Module_Options)
  ],
  providers: [
    AngularFireStorage,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    DatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
