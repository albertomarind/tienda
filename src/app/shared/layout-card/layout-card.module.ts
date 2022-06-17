import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutCardComponent } from './layout-card.component';

@NgModule({
  declarations: [
    LayoutCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LayoutCardComponent
  ]
})
export class LayoutCardModule { }
