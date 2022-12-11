export class Question {
  number: number;
  question: string;
  category: string;

  constructor(number: number, question: string, category: string ) {
    this.number = number;
    this.question = question;
    this.category = category;
  }

}
