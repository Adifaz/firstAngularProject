import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';

import { Routes, RouterModule} from "@angular/router";


const pageRoutes: Routes = [
  {
    path: 'product/list',component: ListComponent, data:{title: 'Product List'} 
  },
  {
    path: 'product/:itemId',component: DetailComponent, data:{title: 'Product Details'} 
  }
];



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pageRoutes)
  ]
})



export class ProductModule { }
