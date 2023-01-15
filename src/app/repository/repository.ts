import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import {Profile} from '../_models/profile';
import { Organisation } from '../_models/organisation';
import { Answer } from '../_models/answer';
import { Question } from '../_models/question';
import { Club } from '../_models/club';
import { ClubQuestion } from '../_models/clubQuestion';
import {Questionnaire} from '../_models/questionnaire';

const ORGANISATIONS = {
  0: new Organisation(0, "Calcolution GmbH", "Consulting"),
  1: new Organisation(1, "Familie Schwehm", "Privat"),
  2: new Organisation(2, "Lufthansa AG", "Luftfahrt"),
  3: new Organisation(3, "Familie Clausen", "Privat"),
  4: new Organisation(4, "Aurubis AG", "Chemie")
}

const QUESTIONS = {
  0: new Question(1, 'Welches Geschlecht haben Sie?', 'Stakeholderangaben'),
  1: new Question(2, 'Wie alt sind Sie?', 'Stakeholderangaben'),
  2: new Question(3, 'Wie gut ist Ihr persönlicher Kenntnisstand in der CO-2 Bilanzierung?', 'Stakeholderangaben'),
  3: new Question(4, 'Wie lautet der Name des betrachteten Stakeholders?', 'Stakeholderangaben'),
  4: new Question(5, 'Welcher Gruppe ist der Stakeholder zuzuordnen?', 'Stakeholderangaben'),
  5: new Question(6, 'In welcher Branche ist der Stakeholder vorwiegend aktiv?', 'Stakeholderangaben'),
  6: new Question(7, 'Welche Rolle haben Sie innerhalb des Stakeholders?', 'Stakeholderangaben'),
  7: new Question(8, 'Welche Emissionsbereiche des Fußabruckes soll detailliert betrachtet werden?', 'relevante Bereiche'),
  8: new Question(9, 'Welche Emissionsbereiche des Geldabdrucks soll detailliert betrachtet werden?', 'relevante Bereiche'),
  9: new Question(10, 'Welche Emissionsbereiche des Handabdrucks soll detailliert betrachtet werden?', 'relevante Bereiche'),
  10: new Question(11, 'Wie groß sind die Storm-Emissionen?', 'Fußabdruck'),
  11: new Question(12, 'Wie groß ist der Einfluss auf die Strom-Emissionen?', 'Fußabdruck'),
  12: new Question(13, 'Wie groß sind die Wärme-Emissionen?', 'Fußabdruck'),
  13: new Question(14, 'Wie groß ist der Einfluss auf die Wärme-Emissionen?', 'Fußabdruck'),
  14: new Question(15, 'Wie groß sind die Straßenverkehr-Emissionen?', 'Fußabdruck'),
  15: new Question(16, 'Wie groß ist der Einfluss auf die Straßenverkehr-Emissionen?', 'Fußabdruck'),
  16: new Question(17, 'Wie groß sind die Schienenverkehr-Emissionen?', 'Fußabdruck'),
  17: new Question(18, 'Wie groß ist der Einfluss auf die Schienenverkehr-Emissionen?', 'Fußabdruck'),
  18: new Question(19, 'Wie groß sind die Luftverkehr-Emissionen?', 'Fußabdruck'),
  19: new Question(20, 'Wie groß ist der Einfluss auf die Luftverkehr-Emissionen?', 'Fußabdruck'),
  20: new Question(21, 'Wie groß sind die Schiffsverkehr-Emissionen?', 'Fußabdruck'),
  21: new Question(22, 'Wie groß ist der Einfluss auf die Schiffsverkehr-Emissionen?', 'Fußabdruck'),
  22: new Question(23, 'Wie groß sind die Elektrogeräte-Emissionen (Konsum)?', 'Fußabdruck'),
  23: new Question(24, 'Wie groß ist der Einfluss auf die Elektrogeräte-Emissionen (Konsum)?', 'Fußabdruck'),
  24: new Question(25, 'Wie groß sind die Kleidung-Emissionen (Konsum)?', 'Fußabdruck'),
  25: new Question(26, 'Wie groß ist der Einfluss auf die Kleidung-Emissionen (Konsum)?', 'Fußabdruck'),
  26: new Question(27, 'Wie groß sind die Rohstoffe-Emissionen (Konsum)?', 'Fußabdruck'),
  27: new Question(28, 'Wie groß ist der Einfluss auf die Rohstoffe-Emissionen (Konsum)?', 'Fußabdruck'),
  28: new Question(29, 'Wie groß sind die Wohngebäude-Emissionen?', 'Fußabdruck'),
  29: new Question(30, 'Wie groß ist der Einfluss auf die Wohngebäude-Emissionen?', 'Fußabdruck'),
  30: new Question(31, 'Wie groß sind die Aktien-Emissionen?', 'Geldabdruck'),
  31: new Question(32, 'Wie groß ist der Einfluss auf die Aktien-Emissionen?', 'Geldabdruck'),
  32: new Question(33, 'Wie groß sind die Anleihen-Emissionen?', 'Geldabdruck'),
  33: new Question(34, 'Wie groß ist der Einfluss auf die Anleihen-Emissionen?', 'Geldabdruck'),
  34: new Question(35, 'Wie groß sind die Aktien-Emissionen?', 'Geldabdruck'),
  35: new Question(36, 'Wie groß ist der Einfluss auf die Aktien-Emissionen?', 'Geldabdruck'),
  36: new Question(37, 'Wie groß ist der Anteil der CO2-Zertifikate?', 'Geldabdruck'),
  37: new Question(38, 'Wie groß ist der Anteil an Spenden?', 'Geldabdruck'),
  38: new Question(39, 'Wie groß sind die Emissionen im Mediensektor?', 'Handabdruck'),
  39: new Question(40, 'Wie groß sind die Emissionen zur Produktverbesserung?', 'Handabdruck'),
  40: new Question(41, 'Wie groß sind die Emissionen zur Prozessverbesserung?', 'Handabdruck'),
  41: new Question(42, 'Wie groß sind die Emissionen wegen Anforderungsänderungen?', 'Handabdruck')
};

const PROFILES = {
  0: new Profile(ORGANISATIONS[0], new Questionnaire([
      new Answer(QUESTIONS[0], 'männlich', true),
      new Answer(QUESTIONS[1], '40', true),
      new Answer(QUESTIONS[2], '+++', true),
      new Answer(QUESTIONS[3], 'Calcolution GmbH', true),
      new Answer(QUESTIONS[4], 'Nachhaltigkeit', true),
      new Answer(QUESTIONS[5], 'Consulting', true),
      new Answer(QUESTIONS[6], 'Geschäftsführung', true)
    ], false), [0, 1]),
  1: new Profile(ORGANISATIONS[1], new Questionnaire([
      new Answer(QUESTIONS[0], 'männlich', true),
      new Answer(QUESTIONS[1], '40', true),
      new Answer(QUESTIONS[2], '+++', true),
      new Answer(QUESTIONS[3], 'Familie Schwehm', true),
      new Answer(QUESTIONS[4], 'Privatperson', true),
      new Answer(QUESTIONS[5], 'Familie', true),
      new Answer(QUESTIONS[6], 'Vater', true)
  ], false), [0]),
  2: new Profile(ORGANISATIONS[2], new Questionnaire([
      new Answer(QUESTIONS[0], 'männlich', true),
      new Answer(QUESTIONS[1], '33', true),
      new Answer(QUESTIONS[2], '+', true),
      new Answer(QUESTIONS[3], 'Lufthansa AG', true),
      new Answer(QUESTIONS[4], 'Infrastruktur', true),
      new Answer(QUESTIONS[5], 'Luftfahrt', true),
      new Answer(QUESTIONS[6], 'Nachhaltigkeitsbeauftragter', true)
  ], false), [0, 1]),
  3: new Profile(ORGANISATIONS[3], new Questionnaire([], false), [0]),
  4: new Profile(ORGANISATIONS[4], new Questionnaire([], false), [0]),
}

const USERS = {
   "christian.schwehm@calcolution.com": new User(0, "christian.schwehm@calcolution.com", "Geheim",
                                        [ORGANISATIONS[0] , ORGANISATIONS[1]], "Christian", "Schwehm", [0 , 1], [PROFILES[0], PROFILES[1]]),
   'max.mustermann@nordakademie.de': new User(1, 'max.mustermann@nordakademie.de', 'Geheim',
                                        [ORGANISATIONS[2]], 'Max', 'Mustermann', [0 , 1], [PROFILES[2]]),
   'dennis.clausen@nordakademie.de': new User(2, 'dennis.clausen@nordakademie.de', 'Geheim123',
                                         [ORGANISATIONS[3]], 'Dennis', 'Clausen', [0], [PROFILES[3]]),
   'martin.schmidt@nordakademie.de': new User(3, 'martin.schmidt@nordakademie.de', 'Geheim123',
                                          [ORGANISATIONS[4]], 'Martin', 'Schmidt', [0], [PROFILES[4]])
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
    let result: User;
    let currentUser: User = USERS[email];
    if(currentUser.password == password) {
      result = currentUser;
    }
    return result;
  }
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

  readAllQuestions(): Question[] {
    return Object.values(QUESTIONS);
  }

}
