import { Injectable } from '@angular/core';
import { Organisation } from '../_models/organisation';
import {BehaviorSubject, Observable} from 'rxjs';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  private organisationSubject: BehaviorSubject<any>;
  private readonly organisation: Observable<Organisation>;

  private readonly _organisation_key = 'selectedOrganisation';

  constructor(
    private storageService: StorageService,
    private organisationService: OrganisationService
  ) {
    this.organisationSubject = new BehaviorSubject<Organisation>(JSON.parse(storageService.get(this._organisation_key) as string));
    this.organisation = this.organisationSubject.asObservable();
  }

  /**
   * Helper function to get the current user
   *
   * @returns user object
   */
  public get organisationValue(): Organisation {
    return this.organisationSubject.value;
  }

  /**
   * Helper function to get an observable to wait on a user
   *
   * @returns observable of user
   */
  public getSelectedOrganisation(): Observable<Organisation> {
    return this.organisation;
  }


  getMockOrganisation(): Organisation[] {
    let result: Organisation [] = [
      new Organisation(1, "Calcolution GmbH", "Consulting", 2 ,"Christian Schwehm","christian.schehm@calcolution.com"),
      new Organisation(2, "Familie Schwehm", "Privat", 5 ,"Christian Schwehm","christian.schehm@calcolution.com")
   ];
    return result;
  }

  setSelectedOrganisation(organisation: Organisation): void {
    this.storageService.set(this._organisation_key, JSON.stringify(organisation));
    this.organisationSubject.next(organisation);
  }
}
