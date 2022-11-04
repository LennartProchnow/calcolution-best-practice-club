import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit(): void {

  }

  logout(): void {
  }

  userName(): String {
    return "Armin Admin";
  }

  getUser(): void {

  }
}
