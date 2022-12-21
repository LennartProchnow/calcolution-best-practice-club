import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Organisation } from '../_models/organisation';
import { Club } from '../_models/club';
import { ClubQuestion } from '../_models/clubQuestion';

const ORGANISATIONS = {
  0: new Organisation(0, "Calcolution GmbH", "Consulting"),
  1: new Organisation(1, "Familie Schwehm", "Privat"),
  2: new Organisation(2, "Lufthansa AG", "Luftfahrt"),
  3: new Organisation(3, "Familie Clausen", "Privat"),
  4: new Organisation(4, "Arubis", "Chemie")
}

const USERS = {
   "christian.schwehm@calcolution.com": new User(0, "christian.schwehm@calcolution.com", "Geheim123",
                                        [ORGANISATIONS[0] , ORGANISATIONS[1]], "Christian", "Schwehm", [0 , 1]),
   'max.mustermann@nordakademie.de': new User(1, 'max.mustermann@nordakademie.de', 'Geheim123',
                                        [ORGANISATIONS[2]], 'Max', 'Mustermann', [0 , 1]),
   'dennis.clausen@nordakademie.de': new User(2, 'dennis.clausen@nordakademie.de', 'Geheim123',
                                         [ORGANISATIONS[3]], 'Dennis', 'Clausen', [0]),
   'martin.schmidt@nordakademie.de': new User(3, 'martin.schmidt@nordakademie.de', 'Geheim123',
                                          [ORGANISATIONS[4]], 'Martin', 'Schmidt', [0])
};

const CLUBQUESTIONS = {
  0: new ClubQuestion(1, 'Welches Geschlecht haben Sie?', true, 'Stakeholderangaben'),
  1: new ClubQuestion(2, 'Wie alt sind Sie?', true, 'Stakeholderangaben'),
  2: new ClubQuestion(3, 'Wie gut ist Ihr persönlicher Kenntnisstand in der CO-2 Bilanzierung?', false, 'Stakeholderangaben'),
  3: new ClubQuestion(4, 'Wie lautet der Name des betrachteten Stakeholders?', false, 'Stakeholderangaben'),
  4: new ClubQuestion(5, 'Welcher Gruppe ist der Stakeholder zuzuordnen?', false, 'Stakeholderangaben'),
  5: new ClubQuestion(6, 'In welcher Branche ist der Stakeholder vorwiegend aktiv?', false, 'Stakeholderangaben'),
  6: new ClubQuestion(7, 'Welche Rolle haben Sie innerhalb des Stakeholders?', false, 'Stakeholderangaben'),
  7: new ClubQuestion(8, 'Welche Emissionsbereiche des Fußabruckes soll detailliert betrachtet werden?', false, 'Stakeholderangaben'),
  8: new ClubQuestion(9, 'Welche Emissionsbereiche des Geldabdrucks soll detailliert betrachtet werden?', false, 'Stakeholderangaben'),
  9: new ClubQuestion(10, 'Welche Emissionsbereiche des Handabdrucks soll detailliert betrachtet werden?', false, 'Stakeholderangaben')
};

const CLUBS = {
  0: new Club(0, 'Calcolution Club', [
                USERS["christian.schwehm@calcolution.com"],
                USERS["max.mustermann@nordakademie.de"],
                USERS['dennis.clausen@nordakademie.de'],
                USERS['martin.schmidt@nordakademie.de']
            ], USERS["christian.schwehm@calcolution.com"],
            'Dies ist ein durch Calcolution öffentlich zugänglicher Best Practice Club, welcher zur Stärkung der Transparenz und als Referenzwert für weitere Clubs dienen soll. Das Ziel soll es sein, eine Plattform für Diskussionen der Stakeholder untereinander zu schaffen.',
            [
              CLUBQUESTIONS[0],
              CLUBQUESTIONS[1],
              CLUBQUESTIONS[2]
            ]
            ),
  1: new Club(1, 'Real Estate Sustanability', [
                USERS["christian.schwehm@calcolution.com"],
                USERS['max.mustermann@nordakademie.de']
            ], USERS['max.mustermann@nordakademie.de'],
            'Dies ist ein Club zur Kommunikation zwischen Stakeholder für den Austausch zu Maßnahmen in der Real Estate Branche.'
            )
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

  getClubs(): Club[] {
    return [CLUBS[0], CLUBS[1]];
  }
}

@Injectable({
  providedIn: 'root',
})
export class QuestionRepository {

  getAllQuestions(): ClubQuestion[] {
    return Object.values(CLUBQUESTIONS);
  }

}
