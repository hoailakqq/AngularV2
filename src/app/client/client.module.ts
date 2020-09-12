import { SignupComponent } from "./pages/signup/signup.component";
import { Part2Component } from "./pages/learning/part2/part2.component";
import { Part1Component } from "./pages/learning/part1/part1.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileComponent } from "./pages/profile/profile/profile.component";
import { ClientComponent } from "./client.component";
import { ClientRoutingModule } from "./client-routing.module";

import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatRippleModule } from "@angular/material/core";
import { MatRadioModule } from "@angular/material/radio";
import { MaterialModule } from "../material.module";
import {
  NgbModule,
  NgbPaginationModule,
  NgbAlertModule,
} from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./pages/home/home.component";
import { PartComponent } from "./pages/part/part.component";
import { ToeicComponent } from "./pages/toeic/toeic.component";
import { SpeakingComponent } from "./pages/learning/speaking/speaking.component";
import { ListeningComponent } from "./pages/learning/listening/listening.component";
import { ReadingComponent } from "./pages/learning/reading/reading.component";
import { WritingComponent } from "./pages/learning/writing/writing.component";
import { Part3Component } from "./pages/learning/part3/part3.component";
import { Part4Component } from "./pages/learning/part4/part4.component";
import { Part5Component } from "./pages/learning/part5/part5.component";
import { Part6Component } from "./pages/learning/part6/part6.component";
import { Part7Component } from "./pages/learning/part7/part7.component";
import { ThanhtichComponent } from "./pages/thanhtich/thanhtich.component";
import { DoimatkhauComponent } from "./pages/doimatkhau/doimatkhau.component";
import { DictionaryComponent } from "./pages/dictionary/dictionary.component";
import { TranslateComponent } from './pages/translate/translate.component';

@NgModule({
  declarations: [
    ClientComponent,
    Part1Component,
    Part2Component,
    SpeakingComponent,
    ProfileComponent,
    HomeComponent,
    PartComponent,
    ToeicComponent,
    SpeakingComponent,
    ListeningComponent,
    ReadingComponent,
    WritingComponent,
    Part3Component,
    Part4Component,
    Part5Component,
    Part6Component,
    Part7Component,
    ThanhtichComponent,
    DoimatkhauComponent,
    DictionaryComponent,
    TranslateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
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
    ClientRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
  ],
})
export class ClientModule {}
