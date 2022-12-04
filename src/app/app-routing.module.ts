import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClubsComponent } from './clubs-component/clubs/clubs.component';

const routes: Routes = [
{path: '', component: DashboardComponent},
{path: 'login', component: LoginComponent},
{path: 'detail-view', component: DetailViewComponent},
{path: 'clubs', component: ClubsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
