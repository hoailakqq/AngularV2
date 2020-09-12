import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { UserComponent } from "./user/user.component";
import {
  NgbModule,
  NgbPaginationModule,
  NgbAlertModule,
} from "@ng-bootstrap/ng-bootstrap";
import { MatRadioModule } from "@angular/material/radio";
import { MatRippleModule } from "@angular/material/core";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MaterialModule } from "../material.module";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask,
  AngularFireStorage,
} from "@angular/fire/storage";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { AdduserComponent } from "./adduser/adduser.component";
import { ContentComponent } from "./content/content.component";
import { LoginComponent } from "./login/login.component";
import { JwPaginationModule } from "jw-angular-pagination";
import { QuestionComponent } from "./Tables/question/question.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UsersComponent } from "./tables/users/users.component";
import { NotifyComponent } from "./notify/notify.component";
import { LessionComponent } from "./tables/lession/lession.component";
import { AddQuestionComponent } from "./tables/add-question/add-question.component";
import { ChartsModule } from "angular-bootstrap-md";
import { GeneralComponent } from "./forms/general/general.component";
import { UserEditComponent } from "./examples/user-edit/user-edit.component";
import { ProfileComponent } from './examples/profile/profile.component';
import { ContactsComponent } from './examples/contacts/contacts.component';
import { AdvancedComponent } from './forms/advanced/advanced.component';
import { EditorsComponent } from './forms/editors/editors.component';
import { EditQuestionComponent } from './examples/edit-question/edit-question.component';
import { QuestionsFromFileComponent } from './examples/questions-from-file/questions-from-file.component';
import { UploadComponent } from './examples/upload/upload.component';
@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    AdduserComponent,
    ContentComponent,
    LoginComponent,
    QuestionComponent,
    DashboardComponent,
    UsersComponent,
    NotifyComponent,
    LessionComponent,
    AddQuestionComponent,
    GeneralComponent,
    UserEditComponent,
    ProfileComponent,
    ContactsComponent,
    AdvancedComponent,
    EditorsComponent,
    EditQuestionComponent,
    QuestionsFromFileComponent,
    UploadComponent
    
    
  ],
  imports: [
    CommonModule,
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
    JwPaginationModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "learning"),
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    ChartsModule,

    AdminRoutingModule,
  ],
  providers: [AngularFireStorage],
})
export class AdminModule {}
