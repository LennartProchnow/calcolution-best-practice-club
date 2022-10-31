import { Component, OnInit } from '@angular/core';
import { HealthService } from '../services/health.service';
import { catchError, map, tap, repeatWhen } from 'rxjs/operators';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  health: boolean = false;

  constructor(private healthService: HealthService) { }

  ngOnInit(): void {
    this.healthCheck();
  }

  healthCheck(): void {
    this.healthService.checkHealth().pipe(
      tap(
        (data) => {
          this.health = true;
        },
        (error) => {
          this.health = false;
        }
      ),
      //retryWhen(errors => errors.pipe(delay(5000)))
    ).subscribe();
  }

}
