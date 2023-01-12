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

  /**
  * checks if the user is already authenticated. If not the navigationbar should not be visible.
  * @return true if the user is authenticated
  */
  isAuthenticated(): boolean {
      return !!this.authenticationService.userValue;
    }

}
