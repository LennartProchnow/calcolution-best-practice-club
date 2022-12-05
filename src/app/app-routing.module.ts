import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClubsComponent } from './clubs-component/clubs/clubs.component';

const routes: Routes = [
{path: '', component: DashboardComponent},
{path: 'login', component: LoginComponent},
{path: 'clubs', component: ClubsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
