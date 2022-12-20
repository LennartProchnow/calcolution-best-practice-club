import {User} from './user';
import {Question} from './question';
import {ClubQuestion} from './clubQuestion';

export class Club {

  id: number;
  name: string;
  participants: User[] = [];
  moderator?: User;
  description?: string;
  questions: ClubQuestion[] = [];

  constructor(id: number, name: string, participants: User[], moderator: User, description: string, questions?: ClubQuestion[]){
    this.id = id;
    this.name = name;
    this.participants = participants;
    this.moderator = moderator;
    this.description = description;
    if(questions) {
      this.questions = questions;
    }
  }

  addQuestion(question: ClubQuestion): void {
    if(!this.questions.includes(question)) {
      this.questions.push(question);
    }
  }

  setQuestions(questions: ClubQuestion[]): void {
    this.questions = questions;
  }

}
