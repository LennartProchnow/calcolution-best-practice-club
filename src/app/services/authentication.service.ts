import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { of } from "rxjs";
import {User} from '../_models/user';
import { UserService } from '../services/user.service';
import {StorageService} from './storage.service';
import {Club} from '../_models/club';
import {UserRepository} from '../repository/repository';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly _user_storage_key = 'user';
  private userSubject: BehaviorSubject<any>;
  private readonly user: Observable<User>;

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  constructor(
      private router: Router,
      private http: HttpClient,
      private storageService: StorageService,
      private userService: UserService,
      private userRepository: UserRepository
  ) {
      this.userSubject = new BehaviorSubject<User>(JSON.parse(storageService.get(this._user_storage_key) as string));
      this.user = this.userSubject.asObservable();
    }


  /**
     * Helper function to get the current user
     *
     * @returns user object
     */
    public get userValue(): User {
      return this.userSubject.value;
    }

    /**
     * Helper function to get an observable to wait on a user
     *
     * @returns observable of user
     */
    public getUser(): Observable<User> {
      return this.user;
    }


  /**
     * Login function performing request and session handling
     *
     * @param username username (in our case email)
     * @param password password of the user
     * @returns an observable of the user
     */
    login(username: string, password: string): Observable<User> {
        let user = this.userRepository.login(username, password);
        //hier mag er die zirkuläre Abhängigkeit nicht
        this.storageService.clear();
        this.storageService.set(this._user_storage_key, JSON.stringify(user));
        this.userService.setSelectedProfile(user.profiles[0]);
        this.userSubject.next(user);
        return of(user);
    }

}
