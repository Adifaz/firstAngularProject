import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { DefaultComponent } from './common/default/default.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressBookModule } from './address-book/address-book.module';


//import { FontAwesomeModule } from '@fortawesome/fontawesome-free'


const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Welcome' } },
  { path: '**', component: NotFoundComponent, data: { title: '404 Page Not Found' } },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DefaultComponent,
    NotFoundComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule, CartModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    AddressBookModule
    //FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
