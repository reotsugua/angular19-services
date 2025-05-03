import { Component, inject } from '@angular/core';
import { FoodService } from '../../service/food.service';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent {
  private foodService: FoodService = inject(FoodService);

  
  public refeicao() {
    this.foodService.selectFood('Macarronada')
  }
  public refeicaoSobremesa() {
    this.foodService.selectFoodAndDessert('Estrognofe', 'Pudim');
  }
  public refeicaoDrink() {
    this.foodService.selectFoodAndDrink('Feijoada', 'Limonada');
  }
}
