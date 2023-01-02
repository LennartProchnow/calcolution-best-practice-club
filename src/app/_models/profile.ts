import {Club} from './club';
import {Organisation} from './organisation';
import {Questionnaire} from './questionnaire';

export class Profile {
  clubs: number[] = [];
  stakeholder: Organisation;
  questionnaire: Questionnaire;

  constructor(stakeholder: Organisation, questionnaire: Questionnaire, clubs: number[]) {
    this.clubs = clubs;
    this.stakeholder = stakeholder;
    this.questionnaire = questionnaire;
  }
}
