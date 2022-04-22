import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Fruit } from '../app.component';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss']
})
export class FruitListComponent implements OnInit {
  fruitList: Fruit[] = [];
  @Output() selectFruit = new EventEmitter<Fruit>();
  selectedIndex!: number;

  constructor(private fruitService: FruitService) { }

  ngOnInit(): void {
    this.fruitList = this.fruitService.getFruitList();
  }

  onSelectFruit(event: Event, fruit: Fruit, index: number): void {
    event.preventDefault();
    this.selectedIndex = index;
    this.fruitService.selectFruit(fruit);
  }
}
