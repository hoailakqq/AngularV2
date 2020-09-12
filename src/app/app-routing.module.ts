import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { NotFoundComponent } from "./not-found/not-found.component";
import { ClientComponent } from "./client/client.component";
import { LoginComponent } from './client/pages/login/login.component';
import { SignupComponent } from './client/pages/signup/signup.component';
import { AuthenGuard } from './guard/authen.guard';
import { Error404Component } from './admin/examples/error404/error404.component';
import { Error500Component } from './admin/examples/error500/error500.component';
import { BlankpageComponent } from './admin/examples/blankpage/blankpage.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    // canActivate: [AuthenGuard],
  },
  {
    path: "signup",
    component: SignupComponent,
    //  
  },
  {
    path: "",
    redirectTo: "client",
    pathMatch: "full",
  },
  {
    path: "404",
    component: Error404Component,
  },
  {
    path: "500",
    component: Error500Component,
  },
  {
    path: "blank",
    component: BlankpageComponent,
  },
  
  {
    path: "client",
    loadChildren: () =>
      import("./client/client.module").then((m) => m.ClientModule),
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
