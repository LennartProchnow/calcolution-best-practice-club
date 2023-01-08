import { Component, OnInit, Input } from '@angular/core';
import {Club} from '../../_models/club';
import {Post} from '../../_models/post';
import {User} from '../../_models/user';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-club-start-page',
  templateUrl: './club-start-page.component.html',
  styleUrls: ['./club-start-page.component.scss']
})
export class ClubStartPageComponent implements OnInit {

  @Input()
  club?:Club;
  postValue: string;
  user: User;
  posts: Post[] = [];

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  /**
  * Reads the current authenticated user and the clubs posts
  */
  ngOnInit(): void {
    this.authenticationService.getUser().subscribe((user: User) => {
       if (user) {
         this.user = user;
       }
     });

    if(this.club) {
      this.posts = [
         new Post(this.club.participants[0], 'Grandiose Zusammenarbeit! Weiter so! #Sustainability', 14, 27)
      ]
    };

  }

  /**
  * add the new post value to the view, when the current user clicks send
  */
  addPost(): void {
    if(this.postValue && this.user) {
      let post = new Post(this.user, this.postValue, 0, 0);
      this.posts.push(post);
      this.postValue = '';
    }
  }
}
