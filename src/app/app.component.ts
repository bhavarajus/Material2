import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
// Observable: reprents a set of values.
import { Observable } from 'rxjs/Observable';
// startwith: Observable emits specific items before emitting all items normally expected from the output.
import { startWith } from 'rxjs/operators/startWith';
// map(): it passes each source value through a function to get changing output values.
import { map } from 'rxjs/operators/map';
import { trigger, style, animate, transition, state } from '@angular/animations';
declare var $: any;
@Component({
  selector: 'app-root',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
        ])
      ]
    )
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchInput = false;
  isOpen = false;
  // Model object.
  search: any;
  // FormControl.
  valueCtrl: FormControl;
  // Expected result stored in this array.
  allValues: Observable<any[]>;
  panelOpenState: boolean = false;
  // Declaring a JSON for expected results.
  values: any = [
    {
      image: 'girl.png',
      name: 'Alexandra Ward',
      roleAndPlace: 'Sr.Analyst, Finance, San Jose'
    },
    {
      image: 'doctor.png',
      name: 'Parish Moon',
      roleAndPlace: 'Manager, Customer Support, Albuquerque'
    },
    {
      image: 'man.png',
      name: 'Alex Hobbs',
      roleAndPlace: 'Manager, Finance, Freemont HQ'
    },
    {
      image: 'man (1).png',
      name: 'Alex Beeler',
      roleAndPlace: 'Manager, Sales Support, New York'
    },
    {
      image: 'man (2).png',
      name: 'Bob Logan',
      roleAndPlace: 'Manager, Account, Denver'
    },
    {
      image: 'girl.png',
      name: 'Alexandra Ward',
      roleAndPlace: 'Sr.Analyst, Finance, San Jose'
    },
    {
      image: 'doctor.png',
      name: 'Parish Moon',
      roleAndPlace: 'Manager, Customer Support, Albuquerque'
    },
    {
      image: 'man.png',
      name: 'Alex Hobbs',
      roleAndPlace: 'Manager, Finance, Freemont HQ'
    },
    {
      image: 'man (1).png',
      name: 'Alex Beeler',
      roleAndPlace: 'Manager, Sales Support, New York'
    },
    {
      image: 'man (2).png',
      name: 'Bob Logan',
      roleAndPlace: 'Manager, Account, Denver'
    },
  ];
  constructor() {
    // Start of the page with these steps.
    // Setting a new form control
    this.valueCtrl = new FormControl();
  }
  // Setting searchInput which is normal toolbar page without click of search button.
  searchInputClick = () => {
    this.searchInput = !this.searchInput;
  }
}
