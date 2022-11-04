import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailViewComponent } from './detail-view/detail-view.component';

const routes: Routes = [
{path: 'detail-view', component: DetailViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
