import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
// Observable: reprents a set of values.
import { Observable } from 'rxjs/Observable';
// startwith: Observable emits specific items before emitting all items normally expected from the output.
import { startWith } from 'rxjs/operators/startWith';
// map(): it passes each source value through a function to get changing output values.
import { map } from 'rxjs/operators/map';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchInput = false;
  // Model object.
  search: any;
  // FormControl.
  valueCtrl: FormControl;
  // Expected result stored in this array.
  allValues: Observable<any[]>;
  // Declaring a JSON for expected results.
  value = [
    { name: 'Ahmed' },
    { name: 'Vamshi' },
    { name: 'Lakshmi' },
    { name: 'Samuel' }
  ];
  constructor() {
    // Start of the page with these steps.
    // Setting a new form control
    this.valueCtrl = new FormControl();
    // Giving values to this array.
    this.allValues = this.valueCtrl.valueChanges.pipe(startWith(''), map(searchValues => searchValues ? this.filterValues(searchValues) : this.value.slice()));
  }
  // Filtering values based on name and the 1st option of the typed value.
  filterValues(name) {
    return this.value.filter(searchValues =>
      searchValues.name.indexOf(name) === 0);
  }
  // Setting searchInput which is normal toolbar page without click of search button.
  searchInputClick = () => {
    this.searchInput = true;
  }
  // Hiding the remaining buttons and showing search bar.
  closeSearchClick = () => {
    this.searchInput = false;
    this.search = '';
  }
}
