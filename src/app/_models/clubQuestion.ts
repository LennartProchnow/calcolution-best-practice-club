import {Question} from './question';

export class ClubQuestion extends Question {
  optional: boolean = false;

  constructor(number: number, question: string, optional: boolean, category: string ) {
    super(number, question, category);
    this.optional = optional;
  }

  checkOptional(): void {
    this.optional = !this.optional;
  }
}
