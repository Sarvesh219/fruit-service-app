import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Fruit } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  private fruitList: Fruit[] = [
    { name: 'Apple', description: 'Healthy fruit' },
    { name: 'Orange', description: 'Citrus fruit' },
    { name: 'Grapes', description: 'Good fruit' },
    { name: 'Banana', description: 'Yellow fruit' }
  ];
  selectedFruit!: Fruit;
  selectedFruitChanged = new Subject<Fruit>();

  constructor() { }

  getFruitList() {
    return this.fruitList.slice();
  }

  selectFruit(fruit: Fruit) {
    this.selectedFruit = fruit;
    this.selectedFruitChanged.next(this.selectedFruit);
  }
}
