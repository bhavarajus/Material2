import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
// map() it passes each source value through a function to get changing output values.
import { map } from 'rxjs/operators/map';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchInput = false;
  search: any;
  valueCtrl: FormControl;
  allValues: Observable<any[]>;
  value = [
    { name: 'Ahmed' },
    { name: 'Vamshi' },
    { name: 'Lakshmi' },
    { name: 'Samuel' }
  ];
  constructor() {
    this.valueCtrl = new FormControl();
    this.allValues = this.valueCtrl.valueChanges.pipe(startWith(''), map(searchValues => searchValues ? this.filterValues(searchValues) : this.value.slice()));
  }
  filterValues(name) {
    return this.value.filter(searchValues =>
      searchValues.name.indexOf(name) === 0);
  }
  searchInputClick = () => {
    this.searchInput = true;
  }
  closeSearchClick = () => {
    this.searchInput = false;
    this.search = '';
  }
}
