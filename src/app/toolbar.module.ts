import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatIconModule, MatAutocompleteModule, MatListModule, MatGridListModule, MatExpansionModule } from '@angular/material';
@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatIconModule, MatAutocompleteModule, MatListModule, MatGridListModule, MatExpansionModule],
  exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatIconModule, MatAutocompleteModule, MatListModule, MatGridListModule, MatExpansionModule],
})

export class ToolBarModule { }
