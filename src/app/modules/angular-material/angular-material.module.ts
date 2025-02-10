import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';


const arr=[MatButtonModule,MatDividerModule,MatIconModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,arr
  ],  exports: [
    arr
  ]
})
export class AngularMaterialModule { }
