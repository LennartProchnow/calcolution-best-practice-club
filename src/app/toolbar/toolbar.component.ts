import { Component, OnInit, Input } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {OrganisationService} from '../services/organisation.service';
import { User } from '../_models/user';
import { Organisation } from '../_models/organisation';


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

  organisations?: Organisation[];



  constructor(
    private authenticationService: AuthenticationService,
    private organisationService: OrganisationService
  ) {

  }

  ngOnInit(): void {
      this.authenticationService.getUser().subscribe((user: User) => {
        if (user) {
          this.user = user;
          this.fullUserName = this.user.forename + " " + this.user.surname;
          this.organisations = user.organisation;
        }
      });
      this.organisationService.getSelectedOrganisation().subscribe((organisation: Organisation) => {
        console.log(organisation);
        if(organisation) {
          this.setSelectedOrganisationName(organisation);
        }
      });
    }


  logout(): void {
  }

  /**
   * Method to set the userName in the view
   *
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
   */
  isAuthenticated(): boolean {
    return !!this.authenticationService.userValue;
  }

  /**
   * Method to set the new selected Organisation through the view
   *
   * @param organisation organisation to be selected
   */
  changeSelectedOrganisation(organisation: Organisation): void {
    console.log(organisation);
    this.setSelectedOrganisationName(organisation);
    this.organisationService.setSelectedOrganisation(organisation);
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
