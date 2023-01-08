import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import {AuthenticationService} from '../services/authentication.service';
import {User} from '../_models/user';

//this is a mock up of the questionnaire-model
const ELEMENT_DATA = [
  {owner: 'Calcolution', name: 'Default Fragebogen', status: 'Offen'},
  {owner: 'Calcolution', name: 'Fragebogen Calcolution', status: 'Geteilt'},
  {owner: 'Calcolution', name: 'Fragebogen Familie Schwehm', status: 'Abgeschlossen'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //progressbar
  progressBarValue=40;
  progressTooltip: string='';

  //bar chart
  displayedColumns: string[] = ['owner', 'name', 'status'];
  dataSource = ELEMENT_DATA;
  barChartData: ChartConfiguration<'bar'>['data'];
  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
  barChartLegend = true;
  barChartPlugins = [];

  constructor(private authenticationService: AuthenticationService) { }

  /**
  * read current authenticated user and prepare view
  */
  ngOnInit(): void {
    this.progressBarValue = this.createRandomNumber(30, 80);
    this.progressTooltip = this.progressBarValue + '% bereits eingespart!';
    let currentUser;
    let stakeholderNames: string[] = [];
    let numberOfParticipation: number[] = [];
    let numberOfModerator: number[] = [];
    let numberOfQuestionnaire: number[] = [];
    let numberOfEvents: number[] = [];

    this.authenticationService.getUser().subscribe((user: User) => {
            if (user) {
              currentUser = user;
              currentUser.profiles.forEach(p => {
                //initialize bar chart data
                stakeholderNames.push(p.stakeholder.name);
                numberOfParticipation.push(this.createRandomNumber(0,100));
                numberOfModerator.push(this.createRandomNumber(0,100));
                numberOfQuestionnaire.push(this.createRandomNumber(0,100));
                numberOfEvents.push(this.createRandomNumber(0,100));
              })
            }
          });

    this.barChartData = {
                              labels: stakeholderNames,
                              datasets: [
                                { data: numberOfParticipation, label: 'Anzahl Clubs (Mitglied)' },
                                { data: numberOfModerator, label: 'Anzahl Clubs (Eigentümer)' },
                                { data: numberOfQuestionnaire, label: 'Anzahl Fragebogen' },
                                { data: numberOfEvents, label: 'Anzahl teilgenommene Events' }
                              ]
                            };
  }

  /**
  * this method creates a random number between @param min and @param max
  * @param min min value of random number
  * @param max max value of random number
  * @return random number
  */
  createRandomNumber(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min) + min);
  }

}
