import { Injectable } from '@angular/core';
import { Organisation } from '../_models/organisation';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  constructor() { }

  getMockOrganisation(): Organisation {
    return new Organisation(1, "Calcolution", "Consulting", 2 ,"Christian Schwehm","christian.schehm@calcolution.com");
  }
}
