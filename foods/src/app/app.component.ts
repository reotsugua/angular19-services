import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeliveryComponent } from "./component/delivery/delivery.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeliveryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foods';
}
