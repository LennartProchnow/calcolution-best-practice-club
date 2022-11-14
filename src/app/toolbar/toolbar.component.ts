import { Component, OnInit, Input } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import { User } from '../_models/user';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  value = "";

  fullUserName: String = "";

  user?: User;

  constructor(
    private authenticationService: AuthenticationService
  ) {

  }

  ngOnInit(): void {
      this.authenticationService.getUser().subscribe((user: User) => {
        if (user) {
          this.user = user;
          this.fullUserName = this.user.forename + " " + this.user.surname;
        }
      });
    }


  logout(): void {
  }

  userName(): String {
    let u: User = this.authenticationService.userValue;
    if(u) {
      return u.fullName;
    } else {
      return "";
    }
  }

  isAuthenticated(): boolean {
    return !!this.authenticationService.userValue;
  }

}
