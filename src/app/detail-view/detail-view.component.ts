import { Component, OnInit, Input } from '@angular/core';
import { OrganisationService } from '../services/organisation.service';
import { Organisation } from '../_models/organisation';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  @Input() organisation?: Organisation;

  user: User;

  isUsersOrganisation: boolean = false;

  editable: boolean = false;

  constructor(
    private organisationService: OrganisationService,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.user = this.authenticationService.userValue;
    if(this.organisation) {
      this.loadOrganisation();
    } else {
      this.setUserOrganisation();
    }
    this.setIsUsersOrganisation();
  }

  loadOrganisation(): void {
    //this.organisation = this.organisationService.getMockOrganisation();
  }

  setIsUsersOrganisation(): void {
    //this.isUsersOrganisation =  this.organisation === this.user.organisation;
  }

  setUserOrganisation(): void {
    //this.organisation = this.user.organisation;
  }



}
