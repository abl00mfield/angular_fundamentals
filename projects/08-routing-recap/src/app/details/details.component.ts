import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <p>{{ this.productList[index].title }}</p>
      <ul>
        <li>{{ productList[index].price }}</li>
        <li>{{ productList[index].description }}</li>
      </ul>
    </section>
  `,
  styles: ``,
})
export class DetailsComponent {
  index = -1;
  productList = [
    {
      title: 'Product 1',
      price: 9234,
      description: 'Product 1 is the best',
    },
    {
      title: 'Product 2',
      price: 3043,
      description: 'Product 2 is special',
    },
    {
      title: 'Product 3',
      price: 4355,
      description: 'Product 3 has my heart',
    },
  ];
  @Input()
  set id(value: number) {
    this.index = value;
  }
}
