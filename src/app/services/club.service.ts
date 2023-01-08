import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { of } from "rxjs";
import {Club} from '../_models/club';
import {User} from '../_models/user';
import {ClubRepository} from '../repository/repository';

/**
* this service provides crud-functionality for club objects
*/
@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(
      private repository: ClubRepository
  ) { }

  /**
  * function to read all clubs
  * @return an observable of all clubs
  */
  readClubs(): Observable<Club[]> {
      return of(this.repository.getClubs());
  }

  /**
  * reads all clubs of an user
  * @return an observable of all clubs of an user
  */
  readClubsOfUser(user: User): Observable<Club[]> {
    return of(this.repository.findClubsOfUser(user));
  }

}
