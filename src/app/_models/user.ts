import { Organisation } from './organisation';
import {Club} from './club';

export class User {
  id?: number;
  forename?: string;
  surname?: string;
  email?: string;
  password?: string;
  organisation?: Organisation[] = [];
  clubs?: Club[] = [];

  constructor(email: string, password: string, organisation?: Organisation[], forename?: string, surname?: string, clubs?: Club[] ) {
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
      this.clubs.push(club);
    } else {
      this.clubs = [club];
    }
  }

}
