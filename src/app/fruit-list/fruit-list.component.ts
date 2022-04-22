import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Fruit } from '../app.component';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss']
})
export class FruitListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  fruitList: Fruit[] = [];
  selectedIndex!: number;

  constructor(private fruitService: FruitService) {
    this.subscription = this.fruitService.fruitListChanged.subscribe((fruits: Fruit[]) => {
      this.fruitList = fruits;
    });
  }

  ngOnInit(): void {
    this.fruitList = this.fruitService.getFruitList();
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  onSelectFruit(event: Event, fruit: Fruit, index: number): void {
    event.preventDefault();
    this.selectedIndex = index;
    this.fruitService.selectFruit(fruit);
  }
}
