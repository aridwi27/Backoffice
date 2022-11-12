import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMainComponent } from './components/layout-main/layout-main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LayoutMainComponent
  ]
})
export class LayoutModule { }
