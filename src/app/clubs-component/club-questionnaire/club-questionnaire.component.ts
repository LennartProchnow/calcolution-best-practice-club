import { Component, OnInit, Input } from '@angular/core';
import {Club} from '../../_models/club';
import {ClubQuestion} from '../../_models/clubQuestion';
import {ClubQuestionsChooseDialogComponent} from '../club-questions-choose-dialog/club-questions-choose-dialog.component';
import {Dialog} from '@angular/cdk/dialog';


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

  constructor(public dialog: Dialog) { }

  ngOnInit(): void {
    if(this.club) {
      this.tableData = this.club.questions;
      console.log(this.tableData);
    }
  }

  openChooseDialog(): void {
    const dialogRef = this.dialog.open(ClubQuestionsChooseDialogComponent, {
      width: '1000px',
      data: this.club,
      });

    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed');
      this.tableData = this.club.questions;
    });
  }

}
