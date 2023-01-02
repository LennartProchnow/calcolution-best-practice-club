import { Injectable } from '@angular/core';
import { QuestionRepository } from '../repository/questionRepository';
import {Observable, of} from 'rxjs';
import {ClubQuestion} from '../_models/clubQuestion';
import {Question} from '../_models/question';
import {Answer} from '../_models/answer';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private repository: QuestionRepository ) { }

  /**
  * reads all clubQuestions
  */
  getAllQuestions(): Observable<Question[]> {
    return of(this.repository.readAllQuestions());
  }

  /**
  * this is a convenience method for a easy convert from Questions into ClubQuestions.
  * For this the All Questions will be read first and then converted into ClubQuestions.
  */
  readAllQuestionsAsClubQuestions(): Observable<ClubQuestion[]> {
      let result: ClubQuestion[] = [];
      this.getAllQuestions()
        .subscribe(questions => {
                     questions.forEach(q => {
                       result.push(new ClubQuestion(q.number, q.question, false, q.category));
                     });
                   });
      return of(result);
  }

  readAllQuestionsAsAnswers(): Observable<Answer[]> {
    let result: Answer[] = [];
    this.getAllQuestions()
      .subscribe(questions => {
                   questions.forEach(q => {
                     result.push(new Answer(q, 'noch keine Antwort vorhanden', false));
                   });
                 });
    return of(result);
  }
}
