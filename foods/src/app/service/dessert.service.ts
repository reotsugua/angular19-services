import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DessertService {
  private dessert!: string;

  selectDessert(dessert: string) {
    this.dessert = dessert;
    console.log('DessertService: ', this.dessert);
  }
}
