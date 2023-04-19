import { Component, EventEmitter, Output } from '@angular/core';

import { Hero } from '../hero/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})

/*
No componente pai estará implementado assim:

src/app/app.component.ts
export class AppComponent {
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}

src/app/app.component.html
<app-hero-form (newItemEvent)="addItem($event)"></app-hero-form>

O $event contém os dados que o usuário digita no <input> do componente heroForm
*/
export class HeroFormComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');
  myHero = new Hero(
    42,
    'SkyDog',
    'Fetch any object at any distance',
    'Leslie Rollover'
  );

  newHero() {
    this.model = new Hero(42, '', '');
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
