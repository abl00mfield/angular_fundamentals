import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="listing">
      <div class="image-parent">
        <img class="product-image" src="https://placehold.co/100x100" />
      </div>
      <section class="details">
        <p class="title">{{ carData.make }} {{ carData.model }}</p>
        <hr />
        <p class="detail">
          <span>Year</span>
          <span>{{ carData.year }}</span>
        </p>
        <div class="detail">
          <span>Transmission</span>
          <span>{{ carData.transmission }}</span>
        </div>
        <p class="detail">
          <span>Mileage</span>
          <span>{{ carData.miles }}</span>
        </p>
        <p class="detail">
          <span>Price</span>
          <span>{{ carData.price }}</span>
        </p>
        <button (click)="addItem()">Save</button>
      </section>
    </article>
  `,
  styles: ``,
})
export class ListingComponent {
  // without the bang operater, you would need to set default values
  @Input({ required: true }) carData!: Car;
  @Output() addItemEvent = new EventEmitter<Car>();

  addItem() {
    this.addItemEvent.emit(this.carData);
  }
}
