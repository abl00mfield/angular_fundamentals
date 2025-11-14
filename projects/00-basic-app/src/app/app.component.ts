// Instructions to set up local environment for Angular project
// Create a new Angular project
// Replace the contents of app.component.ts with the following starting template:
import { Component, Input } from '@angular/core';

export class Address {
  street: string | undefined;
  city: string | undefined;
  zipCode: string | undefined;
}

@Component({
  selector: 'address',
  standalone: true,
  template: `<p>{{ address?.street }}</p>
    <p>{{ address?.city }}</p>
    <p>{{ address?.zipCode }}</p>`,
})
export class AddressComponent {
  @Input() address: Address | undefined;
  constructor() {}
}

@Component({
  selector: 'address-list',
  standalone: true,
  imports: [AddressComponent],
  template: ` <ul>
    @for(a of addresses; track a) {
    <li><address [address]="a"></address></li>
    }
  </ul>`,
})
export class AddressListComponent {
  @Input() addresses: Address[] | undefined;
  constructor() {}
}
// When copying to the TestDome environment, don't copy anything after this comment

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddressListComponent],
  template: ` Hello World
    <address-list [addresses]="addresses"></address-list>`,
})
export class AppComponent {
  addresses = [
    { street: 'Third Avenue', city: 'New York', zipCode: '10001' },
    { street: 'Constitution Avenue', city: 'Washington', zipCode: '20001' },
  ];
}
