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
    return User("lennart.prochnow@ituv.de", "Lennart", "Prochnow", this.organisationService.getMockOrganisation());
  }
}
