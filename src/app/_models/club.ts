import {User} from './user';

export class Club {

  id: number;
  name: string;
  participants: User[] = [];
  moderator?: number;
  description?: string;

  constructor(id: number, name: string, participants: User[], moderator?: number){
    this.id = id;
    this.name = name;
    this.participants = participants;
    this.moderator = moderator;
  }

}
