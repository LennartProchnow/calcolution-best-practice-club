import { Component, OnInit, Inject } from '@angular/core';
import { ChartOptions, ChartConfiguration } from 'chart.js';
import {UserService} from '../../services/user.service';
import {QuestionService} from '../../services/question.service';
import {Profile} from '../../_models/profile';
import {Answer} from '../../_models/answer';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-questionnaire-catalog',
  templateUrl: './questionnaire-catalog.component.html',
  styleUrls: ['./questionnaire-catalog.component.scss']
})
export class QuestionnaireCatalogComponent implements OnInit {

  readonly QUESTIONNAIRE_URL: string = "https://forms.office.com/Pages/ResponsePage.aspx?id=Lw23bt6O-UWFwacZHjWsImiealGHF1NGiTg0sJmxXsRUOElTOU1WNklFWVg1UEpDSUVUMTA2QTczUi4u&wdLOR=cDCC6003B-065A-3B4C-8615-6A6383F11050";

  readonly stakeholderInformationToolTip = 'Allgemeine Fragen über den Stakeholder';
  readonly sectorToolTip = 'Fragen zur Bestimmung der relevanten Emmissionsaktivitäten und der Detailtiefe dieser Aktivitäten';
  readonly footprintToolTip = 'Fragen zur Selbsteinschätzung des Carbon Footprints';
  readonly fingerprintToolTip = 'Fragen zur Selbsteinschätzung der erzeugten Emissionen durch Verhaltensänderungen anderer durch Medien, Kommunikation und innovativen Ideen';
  readonly moneyToolTip = 'Fragen zur Selbsteinschätzung der Emissionen aus den Tätigkeiten als Kapitalgeber für Unternehmen und Projekten';

  //answer categories
  stakeholderInformation: Answer[] = [];
  sectors: Answer[] = [];
  footprint: Answer[] = [];
  fingerprint: Answer[] = [];
  money: Answer[] = [];

  profile?: Profile;
  stakeholderName: string = '###';

  //pie chart attributes
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  pieChartLabels = [ 'offen', 'beantwortet' , 'in Arbeit'];
  pieChartDatasets = [ {
    data: [ 20, 50, 30]
  } ];
  pieChartLegend = true;
  pieChartPlugins = [];

  //bar chart attributes
  barChartLegend = false;
  barChartPlugins = [];
  barChartData: ChartConfiguration<'bar'>['data'];
  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor(
    private userService: UserService,
    private questionService: QuestionService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  /**
  * initialize barChart with data and reads the current selected profile to set up the questionnaire
  */
  ngOnInit(): void {
    this.barChartData = {
                        labels: [ '16', '18', '22', '24', '30'],
                        datasets:
                        [
                          { data: [ 55, 53, 48, 39, 30 ],
                            label: 'in Prozent' },
                        ]
    };
    this.userService.getSelectedProfile()
      .subscribe(p => {
        if(p) {
          this.profile = p;
          //first setup Categories with answers from questionnaire
          this.setupCategories(p.questionnaire.answers);
          this.stakeholderName = p.stakeholder.name;

          //fill up Categories with all other questions
          this.questionService.readAllQuestionsAsAnswers()
            .subscribe(answers => this.setupCategories(answers));
        }
      });
  }

  /**
  * initialize answers based on their category into these categories
  * @param answers answers to set into categories
  */
  private setupCategories(answers: Answer[]): void {
    answers.forEach(answer => {
      switch(answer.question.category) {
         case 'Stakeholderangaben': {
            if(!this.stakeholderInformation.some(a => a.question.number === answer.question.number)) {
              this.stakeholderInformation.push(answer);
            }
            break;
         }
         case 'relevante Bereiche': {
            this.sectors.push(answer);
            break;
         }
         case 'Handabdruck': {
           this.fingerprint.push(answer)
           break;
         }
         case 'Fußabdruck': {
           this.footprint.push(answer);
           break;
         }
         case 'Geldabdruck': {
            this.money.push(answer);
            break;
         }
         default: {
            //should not get here
            break;
         }
      }
    });
  }

  /**
  * opens microsoft-forms in a separate window
  */
  goToQuestionnaire(): void{
    window.open(this.QUESTIONNAIRE_URL, "_blank");
  }

}
