import {Question} from './question';

export class Answer {

  question: Question;
  answer: string;
  isAnswered: boolean;

  constructor(question: Question, answer: string, isAnswered: boolean) {
    this.question = question;
    this.answer = answer;
    this.isAnswered = isAnswered;
  }

  setAnswer(answer: string): void {
    if(answer) {
      this.answer = answer;
      this.isAnswered = true;
    }
  }

  removeAnswer(): void {
    this.answer = '';
    this.isAnswered = false;
  }

}
