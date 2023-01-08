import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClubsComponent } from './clubs-component/clubs/clubs.component';
import { QuestionnaireCatalogComponent } from './questionnaire/questionnaire-catalog/questionnaire-catalog.component';

const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'login', component: LoginComponent},
{path: 'clubs', component: ClubsComponent},
{path: 'questionnaire', component: QuestionnaireCatalogComponent},
{path: 'questionnaire/catalog', component: QuestionnaireCatalogComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
