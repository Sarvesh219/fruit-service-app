import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Fruit } from '../app.component';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.scss']
})
export class FruitDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  selectedFruit!: Fruit;

  constructor(private fruitService: FruitService) {
    this.subscription = this.fruitService.selectedFruitChanged.subscribe((fruit: Fruit) => {
      this.selectedFruit = fruit;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
