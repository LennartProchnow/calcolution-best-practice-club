import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path: '', component: DetailViewComponent},
{path: 'login', component: LoginComponent},
{path: 'detail-view', component: DetailViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
