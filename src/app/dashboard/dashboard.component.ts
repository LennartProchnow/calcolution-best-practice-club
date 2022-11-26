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
  {owner: 'Calcolution', name: 'Fragebogen Privat', status: 'Offen'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public barChartLegend = true;
    public barChartPlugins = [];

    test: string[]=['moinmoin'];

    displayedColumns: string[] = ['owner', 'name', 'status'];
    dataSource = ELEMENT_DATA;

    public barChartData: ChartConfiguration<'bar'>['data'] = {
      labels: [ 'Familie Schwehm', 'Calcolution GmbH'],
      datasets: [
        { data: [ 65, 59 ], label: 'Anzahl Clubs (Mitglied)' },
        { data: [ 28, 48], label: 'Anzahl Clubs (Eigentümer)' },
        { data: [ 15, 2], label: 'Anzahl Fragebogen' },
        { data: [ 10, 13], label: 'Anzahl teilgenommene Events' }
      ]
    };

    public barChartOptions: ChartConfiguration<'bar'>['options'] = {
      responsive: false,
    };

  constructor() { }

  ngOnInit(): void {
  }

}
