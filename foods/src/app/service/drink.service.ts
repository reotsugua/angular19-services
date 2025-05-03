import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private drink!: string;

  selectDrink(drink: string) {
    this.drink = drink;
    console.log('DrinkService: ', this.drink);
  }
}
