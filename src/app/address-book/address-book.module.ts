import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddressAddComponent } from './address-add/address-add.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressNavMenuComponent } from './address-nav-menu/address-nav-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';


const pageRoutes: Routes = [
  {
    path: 'address-book/addressList', component: AddressListComponent, data:{title: 'Address List'}
  },
  {
    path: 'address-book/addressAdd', component: AddressAddComponent, data:{title:'Address Add'}
  },
  {
    path: 'address-book/:addId', component: AddressEditComponent, data:{title:'Address Edit'}
   },
  {
    path: 'reactive-form/', component: ReactiveformComponent, data:{title: 'Reactive Form'}
  }
];


@NgModule({
  declarations: [
    AddressAddComponent, 
    AddressEditComponent, 
    AddressListComponent, 
    AddressNavMenuComponent, 
    ReactiveformComponent, 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(pageRoutes),
    FormsModule
  ]
})
export class AddressBookModule { }
