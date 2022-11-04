import { Component, OnInit, Input } from '@angular/core';
import { OrganisationService } from '../services/organisation.service';
import { Organisation } from '../_models/organisation';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  @Input() organisation?: Organisation;

  isUsersOrganisation: boolean = false;

  editable: boolean = false;

  constructor(private organisationService: OrganisationService) { }

  //ToDo: hier sollte später beim Aufruf immer ein Unternehmen übergeben werden
  //ToDo: hier sollte später beim Aufruf immer ein User übergeben werden, anhand dessen ermittelt werden kann,
  //  welche Daten gelesen werden dürfen
  ngOnInit(): void {
    this.loadOrganisation();
    this.setIsUsersOrganisation();
  }

  loadOrganisation(): void {
    this.organisation = this.organisationService.getMockOrganisation();
  }

  setIsUsersOrganisation(): void {
    this.isUsersOrganisation = true; // ToDo: hier basierend auf den übergebenen User entscheiden
  }



}
