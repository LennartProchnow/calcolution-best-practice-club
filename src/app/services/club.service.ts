import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { of } from "rxjs";
import {Club} from '../_models/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  constructor(
      private router: Router,
      private http: HttpClient
  ) { }

  readClubs(): Observable<Club[]> {
      //here has to be a http Call
      let clubA: Club = new Club(0, 'Calcolution Club', []);
      return of([clubA]);
  }
}
