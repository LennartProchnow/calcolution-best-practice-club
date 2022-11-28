import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

export interface PeriodicElement {
  owner: string;
  name: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
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
    public barChartLegend = true;
    public barChartPlugins = [];

    progressBarValue=40;

    moins = ['moin'];

    progressTooltip: string='';

    items: string[]=['placeholder'];

    test: string[]=['moinmoin'];

    displayedColumns: string[] = ['owner', 'name', 'status'];
    dataSource = ELEMENT_DATA;

    public barChartData: ChartConfiguration<'bar'>['data'];

    public barChartOptions: ChartConfiguration<'bar'>['options'] = {
      responsive: false,
    };

  constructor() { }

  ngOnInit(): void {
    this.progressBarValue = this.createRandomNumber(30, 80);
    this.progressTooltip = this.progressBarValue + '% bereits eingespart!';

    this.barChartData = {
                              labels: [ 'Familie Schwehm', 'Calcolution GmbH'],
                              datasets: [
                                { data: [ this.createRandomNumber(0,100), this.createRandomNumber(0,100) ], label: 'Anzahl Clubs (Mitglied)' },
                                { data: [ this.createRandomNumber(0,100), this.createRandomNumber(0,100)], label: 'Anzahl Clubs (Eigentümer)' },
                                { data: [ this.createRandomNumber(0,100), this.createRandomNumber(0,100)], label: 'Anzahl Fragebogen' },
                                { data: [ this.createRandomNumber(0,100), this.createRandomNumber(0,100)], label: 'Anzahl teilgenommene Events' }
                              ]
                            };
  }

  createRandomNumber(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min) + min);
  }

}
