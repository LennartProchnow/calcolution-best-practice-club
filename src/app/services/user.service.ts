import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Profile } from '../_models/profile';
import { Organisation } from '../_models/organisation';
import { StorageService} from './storage.service';
import {BehaviorSubject, Observable} from 'rxjs';

/**
* this service provides CRUD functionality for user objects
*/
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private profileSubject: BehaviorSubject<any>;
  private readonly profile: Observable<Profile>;

  private readonly _profile_key = 'selectedProfile';

  constructor(
    private storageService: StorageService
  ) {
    this.profileSubject = new BehaviorSubject<Profile>(JSON.parse(storageService.get(this._profile_key) as string));
    this.profile = this.profileSubject.asObservable();
  }

  /**
  * Helper method to set the selected profile for future purposes.
  * @param profile the profile to set
  */
  public setSelectedProfile(profile: Profile): void {
      this.storageService.set(this._profile_key, JSON.stringify(profile));
      this.profileSubject.next(profile);
  }

  /**
   * Helper method to get an observable to wait on the selected profile
   *
   * @returns observable of profile
   */
  public getSelectedProfile(): Observable<Profile> {
    return this.profile;
  }

  /**
  * Method to get the profile of a user based on a stakeholder
  * @param user user with a potential profile
  * @param stakeholder stakeholder to find the profile for
  * @return matching profile of the user
  *
  */
  public getProfileByStakeholder(user: User, stakeholder: Organisation): Profile {
      if(!stakeholder || !user) {
        return;
      }
      let result;
      user.profiles.forEach(p => {
        if(p.stakeholder && p.stakeholder.id == stakeholder.id) {
          result = p;
        }
      })
      return result;
  }
}
