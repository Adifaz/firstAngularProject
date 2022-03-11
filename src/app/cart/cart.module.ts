import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from './list/list.component';

import { Routes, RouterModule} from "@angular/router";

const pageRoutes: Routes = [
  {
    path: 'cart/view',component: ListComponent, data:{title: 'View Cart'} 
  }
];



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pageRoutes)
  ]
})
export class CartModule { }
