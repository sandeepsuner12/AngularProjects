import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes : Recipe[]=[ new Recipe("Demo", "Aalu ki sabzhi hai ye to bass", 'https://live.staticflickr.com/8585/28906445485_ce32150295_b.jpg'),
  new Recipe("Demo1", "Aalu ki sabzhi hai ye to bas", 'https://live.staticflickr.com/8585/28906445485_ce32150295_b.jpg')];
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
