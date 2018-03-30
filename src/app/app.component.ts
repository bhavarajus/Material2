import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchInput = false;
  search: any;
  searchInputClick = () => {
    this.searchInput = true;
  }
  closeSearchClick = () => {
    this.searchInput = false;
    this.search = '';
  }
}
