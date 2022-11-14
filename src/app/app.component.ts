import { Component } from '@angular/core';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Best Practice Club';
  //TODO: rein theoretisch kann das User Management hier passieren

  constructor() {

  }

}
