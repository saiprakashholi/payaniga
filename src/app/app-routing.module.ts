import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: "", redirectTo: "register", pathMatch: "full"
  // },
  {
    path: "register", loadChildren: () => import('./featured_modules/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: "", loadChildren: () => import('./featured_modules/home/home.module').then(m => m.HomeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
