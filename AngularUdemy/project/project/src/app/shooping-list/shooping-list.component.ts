import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent {
  ingredients :Ingredient[] = [
    new Ingredient("Patatos",10),
    new Ingredient("Tamato",3),
  ];

}
