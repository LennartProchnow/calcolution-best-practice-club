import { Component, OnInit, Input } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {UserService} from '../services/user.service';
import { User } from '../_models/user';
import { Profile } from '../_models/profile';
import { Organisation } from '../_models/organisation';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  value = "";
  fullUserName: String = "";
  user?: User;
  selectedOrganisationName?: String;
  organisations: Organisation[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) { }

  /**
  * initialize view at reading current session user and current session profile
  */
  ngOnInit(): void {
      this.authenticationService.getUser().subscribe((user: User) => {
        if (user) {
          this.user = user;
          this.fullUserName = this.user.forename + " " + this.user.surname;
          this.user.profiles.forEach(p => {
            this.organisations.push(p.stakeholder);
          })
        }
      });
      this.userService.getSelectedProfile().subscribe((profile: Profile) => {
        if(profile) {
          this.setSelectedOrganisationName(profile.stakeholder);
        }
      });
    }

  /**
  * Method to logout the user
  */
  logout(): void {
    this.authenticationService.logout().then(() => {
      console.log("logout");
      this.snackBar.open('erfolgreich abgemeldet', 'Schließen');
    });
  }

  /**
   * Method to set the userName in the view
   * @return the full name of the current authenticated user
   *
   */
  userName(): String {
    let u: User = this.authenticationService.userValue;
    if(u) {
      return u.fullName;
    } else {
      return "";
    }
  }

  /**
   * Method to detect if the user is authenticated and if the user component should be visible
   * @return if the user is authenticated
   */
  isAuthenticated(): boolean {
    return !!this.authenticationService.userValue;
  }

  /**
   * Method to set the new selected Profile through the view
   *
   * @param organisation organisation to be selected
   */
  changeSelectedProfile(organisation: Organisation): void {
    this.setSelectedOrganisationName(organisation);

    let profile = this.userService.getProfileByStakeholder(this.user, organisation);
    if(profile) {
      this.userService.setSelectedProfile(profile);
    }
  }

  /**
   * Helper method to set the selectedOrganisationName within view
   *
   * @param organisation selectedOrganisation
   */
  setSelectedOrganisationName(organisation: Organisation): void {
    this.selectedOrganisationName = "@" + organisation.name;
  }
}
