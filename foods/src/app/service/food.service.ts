import { inject, Injectable } from '@angular/core';
import { DessertService } from './dessert.service';
import { DrinkService } from './drink.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private desserService: DessertService = inject(DessertService);
  private drinkService: DrinkService = inject(DrinkService);

  food!: string;

  
  public selectFood(food: string): void {
    this.food = food;
    console.log(this.food);    
  }

  
  public selectFoodAndDessert(food: string, dessert: string): void {
    this.selectFood(food);
    this.desserService.selectDessert(dessert);
  }

  
  public selectFoodAndDrink(food: string, drink: string) {
    this.selectFood(food);
    this.drinkService.selectDrink(drink);
  }
}
