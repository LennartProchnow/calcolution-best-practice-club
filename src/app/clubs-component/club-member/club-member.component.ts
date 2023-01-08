import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions } from 'chart.js';
import {User} from '../../_models/user';
import {Organisation} from '../../_models/organisation';
import {Club} from '../../_models/club';

@Component({
  selector: 'app-club-member',
  templateUrl: './club-member.component.html',
  styleUrls: ['./club-member.component.scss']
})
export class ClubMemberComponent implements OnInit {

  @Input()
  club?:Club;
  value: string = '';
  moderators: User[];
  participants: User[];

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ 'Chemie', 'Real Estate' , 'Luftfahrt', 'Finanzdienstleister', 'Privat' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100, 240, 333 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  /*
  * initialize participants and moderator to display in view
  */
  ngOnInit(): void {
    if(this.club) {
      this.participants = this.club.participants;
      this.moderators = [this.club.moderator];
    }
  }

}
