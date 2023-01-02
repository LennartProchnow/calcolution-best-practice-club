import {Answer} from './answer';

export class Questionnaire {

  answers: Answer[] = [];
  isCompleted: boolean;

  constructor(answers: Answer[], isCompleted: boolean) {
    this.answers = answers;
    this.isCompleted = isCompleted;
  }

  addAnswer(answers: Answer[]): void {
    answers.forEach(answer => {
      this.answers.push(answer);
    });
  }
}
