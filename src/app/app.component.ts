import { Component, OnInit } from '@angular/core';

export interface Fruit {
  name: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'fruit-app';

  constructor() {}

  ngOnInit(): void { }
}
