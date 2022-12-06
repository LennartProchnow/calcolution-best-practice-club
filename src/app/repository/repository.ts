import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Organisation } from '../_models/organisation';
import { Club } from '../_models/club';

const ORGANISATIONS = {
  0: new Organisation(0, "Calcolution GmbH", "Consulting"),
  1: new Organisation(1, "Familie Schwehm", "Privat"),
  2: new Organisation(2, "Lufthansa AG", "Luftfahrt"),
  3: new Organisation(3, "Familie Clausen", "Privat"),
  4: new Organisation(4, "Arubis", "Chemie")
}

const USERS = {
   "christian.schehm@calcolution.com": new User(0, "christian.schehm@calcolution.com", "Geheim123",
                                        [ORGANISATIONS[0] , ORGANISATIONS[1]], "Christian", "Schwehm", [0 , 1]),
   'max.mustermann@nordakademie.de': new User(1, 'max.mustermann@nordakademie.de', 'Geheim123',
                                        [ORGANISATIONS[2]], 'Max', 'Mustermann', [0 , 1]),
   'dennis.clausen@nordakademie.de': new User(2, 'dennis.clausen@nordakademie.de', 'Geheim123',
                                         [ORGANISATIONS[3]], 'Dennis', 'Clausen', [0]),
   'martin.schmidt@nordakademie.de': new User(3, 'martin.schmidt@nordakademie.de', 'Geheim123',
                                          [ORGANISATIONS[4]], 'Martin', 'Schmidt', [0])
};

const CLUBS = {
  0: new Club(0, 'Calcolution Club', [
                USERS["christian.schehm@calcolution.com"],
                USERS["max.mustermann@nordakademie.de"],
                USERS['dennis.clausen@nordakademie.de'],
                USERS['martin.schmidt@nordakademie.de']
            ], USERS["christian.schehm@calcolution.com"]),
  1: new Club(1, 'Real Estate Sustanability', [
                USERS["christian.schehm@calcolution.com"],
                USERS['max.mustermann@nordakademie.de']
            ], USERS['max.mustermann@nordakademie.de'])
};

@Injectable({
  providedIn: 'root',
})
export class UserRepository {

  login(email: string, password: string): User {
    let user: User = USERS[email];
    return user;
  }
}

@Injectable({
  providedIn: 'root',
})
export class OrganisationRepository {


}

@Injectable({
  providedIn: 'root',
})
export class ClubRepository {

  findClubsOfUser(user: User): Club[] {
    let clubIds = user.clubs;
    if(!clubIds) {
      return [];
    }

    let clubs = [];
    clubIds.forEach(function (id) {
      let club = CLUBS[id];
      if(club) {
        clubs.push(club);
      }
    });

    return clubs;
  }
}
