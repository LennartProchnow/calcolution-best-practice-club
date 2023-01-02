import { Injectable } from '@angular/core';
import {Question} from '../_models/question';
import {ClubQuestion} from '../_models/clubQuestion';

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

@Injectable({
  providedIn: 'root',
})
export class QuestionRepository {

  readAllQuestions(): Question[] {
    return Object.values(QUESTIONS);
  }

}
