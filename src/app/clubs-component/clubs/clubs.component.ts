import { Component, OnInit } from '@angular/core';
import { ClubService} from '../../services/club.service';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../_models/user';
import { Club } from '../../_models/club';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  user:User;
  userClubs: Club[];
  selectedClub?: Club;

  //visibility of components
  startIsVisible = false;
  clubSelfEstimationIsVisible = false;
  measuresIsVisible = false;
  memberIsVisible = false;
  questionnaireIsVisible = false;

  constructor(
    private authenticationService: AuthenticationService,
    private clubService: ClubService
  ) { }

  ngOnInit(): void {
     this.authenticationService.getUser().subscribe((user: User) => {
       if (user) {
         this.user = user;
         this.userClubs = user.clubs;
         //initial selected Club
         if(this.userClubs) {
          this.selectedClub = this.userClubs[0];
          this.startIsVisible = true;
         }
         console.log(this.userClubs);
       }
     });
  }

  /**
  * Changes content, when user clicks within the navigation-panel
  */
  changeContent(contentType: string, club: Club): void {
    if(club) {
      this.selectedClub = club;
    }

    this.startIsVisible = 'start' == contentType;
    this.clubSelfEstimationIsVisible = 'clubSelfEstimation' == contentType;
    this.measuresIsVisible = 'measures' == contentType;
    this.memberIsVisible = 'member' == contentType;
    this.questionnaireIsVisible = 'questionnaire' == contentType;
  }

}
