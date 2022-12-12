import { Injectable } from '@angular/core';
import { QuestionRepository } from '../repository/repository';
import {Observable, of} from 'rxjs';
import {ClubQuestion} from '../_models/clubQuestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private repository: QuestionRepository ) { }

  /**
  * reads all clubQuestions
  */
  getAllQuestions(): Observable<ClubQuestion[]> {
    return of(this.repository.getAllQuestions());
  }
}
