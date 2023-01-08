import { Component, OnInit, Inject } from '@angular/core';
import {Dialog, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';
import { Club } from '../../_models/club';
import { ClubQuestion } from '../../_models/clubQuestion';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {QuestionService} from '../../services/question.service';

@Component({
  selector: 'app-club-questions-choose-dialog',
  templateUrl: './club-questions-choose-dialog.component.html',
  styleUrls: ['./club-questions-choose-dialog.component.scss']
})
export class ClubQuestionsChooseDialogComponent implements OnInit {

  questions: ClubQuestion[] = [];

  displayedColumns = ['select', 'Nummer der Frage', 'Frage', 'Opt.'];

  selection = new SelectionModel<ClubQuestion>(true, []);

  constructor(
    private dialogRef: DialogRef<Club>,
    @Inject(DIALOG_DATA) public club: Club,
    private questionService: QuestionService
  ) { }

  /**
  * initialize dialog with questions out of the club and reads all other questions that are not included in club
  */
  ngOnInit(): void {
    this.questions.push(...this.club.questions);

    this.selection.select(...this.club.questions);

    this.questionService.readAllQuestionsAsClubQuestions()
      .subscribe(result => {
        result.forEach(q => {
          if(!this.questions.includes(q)) {
            this.questions.push(q);
          }
        });
      });
  }

  /**
  * This method writes the selected questions in the club and closes the dialog, when the user clicks on the save-button
  */
  save(): void {
    this.club.setQuestions(this.selection.selected);
    this.dialogRef.close(this.club);
  }

  /**
  * this method closes the dialog
  */
  close(): void {
    this.dialogRef.close(this.club);
  }

  /**
  * Checks if all rows are selected
  * @return Whether the number of selected elements matches the total number of rows.
  */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.questions.length;
    return numSelected === numRows;
  }

  /**
  * Selects all rows if they are not all selected - otherwise clear selection.
  */
  toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.selection.select(...this.questions);
    }
  }

}
