import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./auth.component";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
