import { Organisation } from './organisation';
import {Club} from './club';

export class User {
  id?: number;
  forename?: string;
  surname?: string;
  email?: string;
  password?: string;
  organisation?: Organisation[] = [];
  clubs?: number[] = [];

  constructor(id: number, email: string, password: string, organisation?: Organisation[], forename?: string, surname?: string, clubs?: number[] ) {
    this.email = email;
    this.password = password;
    this.forename = forename;
    this.surname = surname;
    this.organisation = organisation;
    this.clubs = clubs;
  }

  public get fullName(): String {
    return this.forename + " " + this.surname;
  }

  addClub(club: Club): void {
    if (this.clubs) {
      console.log(this.clubs);
      this.clubs.push(club.id);
    } else {
      this.clubs = [club.id];
    }
  }

}
