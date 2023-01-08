import { Injectable } from '@angular/core';
import { QuestionRepository } from '../repository/repository';
import {Observable, of} from 'rxjs';
import {ClubQuestion} from '../_models/clubQuestion';
import {Question} from '../_models/question';
import {Answer} from '../_models/answer';

/**
* This service provides CRUD functionality of question objects
*/
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private repository: QuestionRepository ) { }

  /**
  * reads all questions
  * @return an observable of all questions
  */
  getAllQuestions(): Observable<Question[]> {
    return of(this.repository.readAllQuestions());
  }

  /**
  * this is a convenience method to convert from Questions into ClubQuestions.
  * For this the All Questions will be read first and then converted into ClubQuestion-stubs.
  * @return an observable of all questions as ClubQuestions
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

  /**
  * this is a convenience method to convert from Questions into Answers.
  * For this the All Questions will be read first and then converted into Answer-stubs.
  * @return an observable of all questions as answers
  */
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
