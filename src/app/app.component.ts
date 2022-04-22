import { Component, OnInit } from '@angular/core';
import { FruitService } from './services/fruit.service';

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
  fruitName: string = '';
  fruitDescription: string = '';
  title: string = 'fruit-app';

  constructor(private fruitService: FruitService) {}

  ngOnInit(): void { }

  getButtonDisabled(): boolean {
    if (!this.fruitName.length && !this.fruitDescription.length) return true;
    return false;
  }

  addFruit(): void {
    const fruit: Fruit = { name: this.fruitName, description: this.fruitDescription };
    this.fruitService.addFruit(fruit);
    this.fruitName = '';
    this.fruitDescription = '';
  }
}
