import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminComponent } from "./admin.component";
import { UserComponent } from "./user/user.component";
import { ContentComponent } from "./content/content.component";
import { LoginComponent } from "./login/login.component";
import { AdduserComponent } from "./adduser/adduser.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UsersComponent } from "./tables/users/users.component";
import { RoleGuardGuard } from '../guard/role-guard.guard';
import { QuestionComponent } from './Tables/question/question.component';
import { NotifyComponent } from './notify/notify.component';
import { AddQuestionComponent } from './tables/add-question/add-question.component';
import { GeneralComponent } from './forms/general/general.component';
import { EditorsComponent } from './forms/editors/editors.component';
import { AdvancedComponent } from './forms/advanced/advanced.component';
import { ContactsComponent } from './examples/contacts/contacts.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { UserEditComponent } from './examples/user-edit/user-edit.component';
import { Error404Component } from './examples/error404/error404.component';
import { Error500Component } from './examples/error500/error500.component';
import { BlankpageComponent } from './examples/blankpage/blankpage.component';
import { EditQuestionComponent } from './examples/edit-question/edit-question.component';
import { QuestionsFromFileComponent } from './examples/questions-from-file/questions-from-file.component';
import { UploadComponent } from './examples/upload/upload.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    canActivate: [RoleGuardGuard], 
    data: { 
      expectedRole: '1'
    },
    children: [
      {
        path: "noti",
        component: NotifyComponent,
      },
      {
        path: "questions",
        component: QuestionComponent,
      },
      {
        path: "addquestion",
        component: AddQuestionComponent,
      },
      
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "index",
        component: ContentComponent,
      },
      {
        path: "adduser",
        component: AdduserComponent,
      },
      {
        path: "",
        component: ContentComponent,
      },
      {
        path: "users",
        component: UsersComponent,
      },
      {
        path: "content",
        component: ContentComponent,
      },
      {
        path: "user",
        component: UserComponent,
      },
      {
        path: "general",
        component: GeneralComponent,
      },
      {
        path: "editors",
        component: EditorsComponent,
      },
      {
        path: "advanced",
        component: AdvancedComponent,
      },
      {
        path: "contact",
        component: ContactsComponent,
      },
      {
        path: "profile",
        component: ProfileComponent,
      },
      {
        path: "edituser/:id",
        component: UserEditComponent,
      },
      {
        path: "edituser",
        component: UserEditComponent,
      },
      {
        path: "editquestion/:id",
        component: EditQuestionComponent,
      },
      {
        path: "editquestion",
        component: EditQuestionComponent,
      },
      {
        path: "checkquestion",
        component: QuestionsFromFileComponent,
      }
      ,
      {
        path: "upload",
        component: UploadComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
