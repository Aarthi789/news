import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  
{path:'', loadChildren:()=>import('../app/news/news.module').then(m=>m.NewsModule)},
{path:'auth', loadChildren:()=>import('../app/auth/auth.module').then(m=>m.AuthModule)},
{path:'shared', loadChildren:()=>import('../app/shared/shared/shared.module').then(m=>m.SharedModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
