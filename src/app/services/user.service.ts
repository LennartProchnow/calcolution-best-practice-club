import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Organisation } from '../_models/organisation';
import { OrganisationService} from './organisation.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private organisationService: OrganisationService) { }

  getMockUser(): User {
  email: string, password: string, forename?: string, surname?: string, organisation: Organisation
    return User("lennart.prochnow@ituv.de", "Lennart", "Prochnow", this.organisationService.getMockOrganisation());
  }
}
