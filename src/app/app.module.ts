import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { NgChartsModule } from 'ng2-charts';

// Angular-Material
import {MaterialExampleModule} from '../material.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCommonModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DialogModule} from '@angular/cdk/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { ClubsComponent } from './clubs-component/clubs/clubs.component';
import { ClubMemberComponent } from './clubs-component/club-member/club-member.component';
import { ClubAssessmentComponent } from './clubs-component/club-assessment/club-assessment.component';
import { ClubMeasureComponent } from './clubs-component/club-measure/club-measure.component';
import { ClubStartPageComponent } from './clubs-component/club-start-page/club-start-page.component';
import { ClubQuestionnaireComponent } from './clubs-component/club-questionnaire/club-questionnaire.component';
import { ClubQuestionsChooseDialogComponent } from './clubs-component/club-questions-choose-dialog/club-questions-choose-dialog.component';
import { QuestionnaireCatalogComponent } from './questionnaire/questionnaire-catalog/questionnaire-catalog.component';


const OPTIONS = {
  appearance: 'outline',
  floatLabel: 'always',
  primary: 'green',
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    NavigationbarComponent,
    DashboardComponent,
    ClubsComponent,
    ClubMemberComponent,
    ClubAssessmentComponent,
    ClubMeasureComponent,
    ClubStartPageComponent,
    ClubQuestionnaireComponent,
    ClubQuestionsChooseDialogComponent,
    QuestionnaireCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatNativeDateModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressBarModule,
    NgChartsModule,
    ScrollingModule,
    MatTableModule,
    MatDividerModule,
    MatExpansionModule,
    MatCheckboxModule,
    DialogModule,
    MatBadgeModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {... OPTIONS},
    }

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
