import { Organisation } from './organisation';

export class User {
  id?: number;
  forename?: string;
  surname?: string;
  email?: string;
  password?: string;
  organisation?: Organisation;
  authdata?: string;

  constructor(email: string, password: string, organisation?: Organisation, forename?: string, surname?: string ) {
    this.email = email;
    this.password = password;
    this.forename = forename;
    this.surname = surname;
    this.organisation = organisation;
  }

  public get fullName(): String {
    return this.forename + " " + this.surname;
  }

}
