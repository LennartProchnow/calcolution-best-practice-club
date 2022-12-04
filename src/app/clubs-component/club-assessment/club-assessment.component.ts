import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/user';

@Component({
  selector: 'app-club-assessment',
  templateUrl: './club-assessment.component.html',
  styleUrls: ['./club-assessment.component.scss']
})
export class ClubAssessmentComponent implements OnInit {

  participants: User[];

  footprint: string[] = ['Mobilität', 'Energie', 'Gebäude & Infrastruktur', 'Dienstleistungen', 'Konsum', 'Nahrungsmittel', 'Umwelteinflüsse'];
  money: string[] = ['Förderungen & Spenden', 'Investitionen'];
  handprint: string[] = ['Kommunikation/Überzeugung', 'Innovation/Forschung'];

  constructor() { }

  ngOnInit(): void {
    this.createParticipants();
  }

  createParticipants(): void {
      this.participants = [
        new User('max.mustermann@nordakademie.de', 'Geheim123', [], 'Max', 'Mustermann'),
        new User('dennis.clausen@nordakademie.de', 'Geheim123', [], 'Dennis', 'Clausen'),
        new User('martin.schmidt@nordakademie.de', 'Geheim123', [], 'Martin', 'Schmidt')
      ];
    }

}
