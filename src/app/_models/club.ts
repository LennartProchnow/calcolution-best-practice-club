import {User} from './user';

export class Club {

  id: number;
  name: string;
  participants: User[] = [];
  moderator?: User;
  description?: string;

  constructor(id: number, name: string, participants: User[], moderator?: User){
    this.id = id;
    this.name = name;
    this.participants = participants;
    this.moderator = moderator;
  }

}
