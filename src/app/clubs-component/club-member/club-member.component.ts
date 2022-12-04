import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import {User} from '../../_models/user';
import {Organisation} from '../../_models/organisation';

@Component({
  selector: 'app-club-member',
  templateUrl: './club-member.component.html',
  styleUrls: ['./club-member.component.scss']
})
export class ClubMemberComponent implements OnInit {

  value: string = '';
  moderators: User[];
  participants: User[];

  public pieChartOptions: ChartOptions<'pie'> = {
      responsive: false,
    };
    public pieChartLabels = [ [ 'Chemie' ], [ 'Real Estate' ], 'Privat' ];
    public pieChartDatasets = [ {
      data: [ 300, 500, 100 ]
    } ];
    public pieChartLegend = true;
    public pieChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
    this.createUsers();
    this.createModerators();
  }

  createUsers(): void {
    this.participants = [
      new User('max.mustermann@nordakademie.de', 'Geheim123', [], 'Max', 'Mustermann'),
      new User('dennis.clausen@nordakademie.de', 'Geheim123', [], 'Dennis', 'Clausen'),
      new User('martin.schmidt@nordakademie.de', 'Geheim123', [], 'Martin', 'Schmidt')
    ];
  }

  createModerators(): void {
  this.moderators = [
        new User('christian.schwehm@calcolution.de', 'Geheim123', [], 'Christian', 'Schwehm')
      ];
  }

}
