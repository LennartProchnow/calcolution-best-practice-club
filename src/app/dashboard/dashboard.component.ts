import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  graph1 = {
      data: [
        { x: [1, 2, 3], y: [2, 3, 4], type: 'bar' },
      ],
      layout: {title: 'Some Data to Hover Over'}
    };

  constructor() { }

  ngOnInit(): void {
  }

}
