import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatTabsModule,
  MatChipsModule,
  MatMenuModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTabsModule,
    MatChipsModule,
    MatMenuModule,
    MatGridListModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTabsModule,
    MatChipsModule,
    MatMenuModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
