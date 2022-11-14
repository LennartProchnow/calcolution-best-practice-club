import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit {

  constructor(
      private authenticationService: AuthenticationService
    ) {  }

  ngOnInit(): void {
  }

  isAuthenticated(): boolean {
      return !!this.authenticationService.userValue;
    }

}
