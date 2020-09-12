import { TranslateComponent } from "./pages/translate/translate.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { DictionaryComponent } from "./pages/dictionary/dictionary.component";
import { DoimatkhauComponent } from "./pages/doimatkhau/doimatkhau.component";
import { ThanhtichComponent } from "./pages/thanhtich/thanhtich.component";
import { Part4Component } from "./pages/learning/part4/part4.component";
import { Part3Component } from "./pages/learning/part3/part3.component";
import { Part5Component } from "./pages/learning/part5/part5.component";
import { Part6Component } from "./pages/learning/part6/part6.component";
import { ListeningComponent } from "./pages/learning/listening/listening.component";
import { WritingComponent } from "./pages/learning/writing/writing.component";
import { ReadingComponent } from "./pages/learning/reading/reading.component";
import { SpeakingComponent } from "./pages/learning/speaking/speaking.component";
import { Part2Component } from "./pages/learning/part2/part2.component";
import { Part1Component } from "./pages/learning/part1/part1.component";
import { ToeicComponent } from "./pages/toeic/toeic.component";
import { PartComponent } from "./pages/part/part.component";
import { GetDataserviesService } from "./services/dataservies/get-dataservies.service";
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "../client/pages/profile/profile/profile.component";
import { ClientComponent } from "./client.component";
import { RoleGuardGuard } from "../guard/role-guard.guard";
import { ClientGuard } from "../guard/client.guard";
import { Part7Component } from "./pages/learning/part7/part7.component";

const routes: Routes = [
  {
    path: "",
    component: ClientComponent,
    canActivate: [ClientGuard],
    data: {
      expectedRole: "2",
    },
    children: [
      { path: "", component: HomeComponent },
      { path: "profile", component: ProfileComponent },
      { path: "thanhtich", component: ThanhtichComponent },
      { path: "changepassword", component: DoimatkhauComponent },
      { path: "dictionary", component: DictionaryComponent },
      { path: "translate", component: TranslateComponent },
      { path: "part/:id", component: PartComponent },
      { path: "toeic/:id", component: ToeicComponent },
      { path: "part1/:id", component: Part1Component },
      { path: "part2/:id", component: Part2Component },
      { path: "part3/:id", component: Part3Component },
      { path: "part4/:id", component: Part4Component },
      { path: "part5/:id", component: Part5Component },
      { path: "part6/:id", component: Part6Component },
      { path: "part7/:id", component: Part7Component },
      { path: "speaking/:id", component: SpeakingComponent },
      { path: "listening/:id", component: ListeningComponent },
      { path: "writing/:id", component: WritingComponent },
      { path: "reading/:id", component: ReadingComponent },

      // {
      //   path: "part1",
      //   component: Part1Component, // canDeactivate: [CheckEditGuard]
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [GetDataserviesService],
})
export class ClientRoutingModule {}
