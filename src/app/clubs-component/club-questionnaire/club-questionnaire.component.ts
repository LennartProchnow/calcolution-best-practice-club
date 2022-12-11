import { Component, OnInit, Input } from '@angular/core';
import {Club} from '../../_models/club';
import {ClubQuestion} from '../../_models/clubQuestion';


@Component({
  selector: 'app-club-questionnaire',
  templateUrl: './club-questionnaire.component.html',
  styleUrls: ['./club-questionnaire.component.scss']
})
export class ClubQuestionnaireComponent implements OnInit {

  @Input()
  club?:Club;

  tableData: ClubQuestion[] = [];

  columnsToDisplay = ['Nummer der Frage', 'Frage', 'Opt.', 'Kategorie'];

  constructor() { }

  ngOnInit(): void {
    if(this.club) {
      this.tableData = this.club.questions;
      console.log(this.tableData);
    }
  }

}
