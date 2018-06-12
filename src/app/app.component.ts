import { Person } from './person.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  kevin: Person;

  constructor() {
    this.kevin = new Person('1234', 'Kevin Moreno', 24);
  }
}
