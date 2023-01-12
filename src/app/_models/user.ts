import { Organisation } from './organisation';
import {Club} from './club';
import {Profile} from './profile';

export class User {
  id?: number;
  forename?: string;
  surname?: string;
  email?: string;
  password?: string;
  profiles?: Profile[] = [];
  organisation?: Organisation[] = [];
  clubs?: number[] = [];

  constructor(id: number, email: string, password: string, organisation?: Organisation[], forename?: string, surname?: string, clubs?: number[], profiles?: Profile[] ) {
    this.email = email;
    this.password = password;
    this.forename = forename;
    this.surname = surname;
    this.organisation = organisation; // der könnte dann weg
    this.clubs = clubs; //der könnte dann weg
    this.profiles = profiles;
  }

  public get fullName(): string {
    return this.forename + " " + this.surname;
  }

}
