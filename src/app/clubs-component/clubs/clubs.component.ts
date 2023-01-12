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

  contentName = 'Start';

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

  /**
  * initialize current authenticated user and the users clubs
  */
  ngOnInit(): void {
     this.authenticationService.getUser().subscribe((user: User) => {
       if (user) {
         this.user = user;
         this.clubService.readClubsOfUser(user).subscribe((clubs: Club[]) => {
            this.userClubs = clubs;
         });
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
  * Changes content, when user selects a component in clubs-navigation-panel
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

    this.changeContentName();
  }

  /**
  * Changes content name shown as addition to the club name
  */
  changeContentName(): void {
     if(this.startIsVisible) {
        this.contentName = 'Start';
     } else if (this.clubSelfEstimationIsVisible) {
        this.contentName = 'Selbsteinschätzung';
     } else if (this.clubSelfEstimationIsVisible) {
        this.contentName = 'Selbsteinschätzung';
     } else if (this.measuresIsVisible) {
        this.contentName = 'Maßnahmen';
     } else if (this.memberIsVisible) {
        this.contentName = 'Mitglieder';
     } else if (this.questionnaireIsVisible) {
        this.contentName = 'Fragebogen';
     }
  }

  /**
  * Checks if the current User is moderator of this club
  * @return if the current User is moderator
  */
  checkAuthorization(club: Club): boolean {
    return club.moderator.email == this.user.email;
  }

}
