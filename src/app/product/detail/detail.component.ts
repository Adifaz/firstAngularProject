import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {appSettings} from '../../models/app-settings';

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  itemId;
  productData: any = [];
  cartItems: any = [];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.cartItems = !localStorage.getItem("myCart")
      ? []
      : JSON.parse(localStorage.getItem("myCart"));
    this.productData = [];
    this.route.params.subscribe((res) => {
      this.itemId = res["itemId"];
      this.getName();
      this.getColor();
      this.getPrice();
      this.getDesc();
      this.getImage();
      this.getId();
    });
  }

  getName() {
    
    appSettings.productList.forEach((element) => {
      if (element.id == this.itemId) {
        this.productData = element;
      }
    });
    
    return this.productData.name;
  }

  getColor() {
    appSettings.productList.forEach((element) => {
      if (element.id == this.itemId) {
        this.productData = element;
      }
    });
    return this.productData.color;
  }

  getPrice() {
    appSettings.productList.forEach((element) => {
      if (element.id == this.itemId) {
        this.productData = element;
      }
    });
    return this.productData.price;
  }

  getDesc() {
    appSettings.productList.forEach((element) => {
      if (element.id == this.itemId) {
        this.productData = element;
      }
    });
    return this.productData.description;
  }

  getImage() {
    appSettings.productList.forEach((element) => {
      if (element.id == this.itemId) {
        this.productData = element;
      }
    });
    return this.productData.image;
  }

  getId() {
    appSettings.productList.forEach((element) => {
      if (element.id == this.itemId) {
        this.productData = element;
      }
    });
    return this.productData.id;
  }

  addToCart__(prdId) {
    //add if else loop to check whether cart is empty or not.
    if (this.cartItems.length == 0) {
      this.cartItems.push({ id: prdId, qty: 1 });
    } else {
      var itemsInCart = JSON.parse(localStorage.getItem("myCart"));
      for (let i = 0; i < this.cartItems.length; i++) {
        for (let j = 0; j < itemsInCart.length; i++) {
          if (this.cartItems[i].id != itemsInCart[i].id) {
            this.cartItems.push({ id: prdId, qty: 1 });
          }
        }
      }
    }
    localStorage.setItem("myCart", JSON.stringify(this.cartItems));
  }

  addToCart(prdId) {
    let itemFound = false;
    if (this.cartItems.length) {
      this.cartItems.forEach((cart) => {
        if (prdId == cart.id) {
          itemFound = true;
        }
      });
      if (!itemFound) {
        this.cartItems.push({ id: prdId, qty: 1 });
      }
    } else {
      this.cartItems.push({ id: prdId, qty: 1 });
    }
    localStorage.setItem("myCart", JSON.stringify(this.cartItems));
  }
}
