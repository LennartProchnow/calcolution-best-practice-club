import { Component, OnInit, Input } from '@angular/core';
import {User} from '../../_models/user';
import {Club} from '../../_models/club';

@Component({
  selector: 'app-club-assessment',
  templateUrl: './club-assessment.component.html',
  styleUrls: ['./club-assessment.component.scss']
})
export class ClubAssessmentComponent implements OnInit {

  @Input()
  club?:Club;
  participants: User[];

  footprint: string[] = ['Mobilität', 'Energie', 'Gebäude & Infrastruktur', 'Dienstleistungen', 'Konsum', 'Nahrungsmittel', 'Umwelteinflüsse'];
  money: string[] = ['Förderungen & Spenden', 'Investitionen'];
  handprint: string[] = ['Kommunikation/Überzeugung', 'Innovation/Forschung'];

  constructor() { }

  /**
  * initialize participants of the club to display in filter
  */
  ngOnInit(): void {
    if(this.club) {
      this.participants = this.club.participants;
    }
  }

}
