import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component';


const routes: Routes = [
  // { path: "", redirectTo: "registerpage", pathMatch: "full" },
  {
    path: "", component: RegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
