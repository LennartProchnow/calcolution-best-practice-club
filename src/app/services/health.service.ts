import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, repeatWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  url = 'actuator/health/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  checkHealth(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
        map((resp: any) => {
          if(resp.status === 'UP'){
            return resp.status;
          }
          throw resp.status;
        })
      );
  }
}
