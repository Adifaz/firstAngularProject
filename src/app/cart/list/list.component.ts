import { Component, OnInit } from "@angular/core";
import { appSettings } from "../../models/app-settings";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  rawCart: any = [];
  cartItems: any = [];
  productData: any = [];
  constructor() {}

  ngOnInit() {
    this.productData = appSettings.productList;
    this.rawCart = !localStorage.getItem("myCart")
      ? []
      : JSON.parse(localStorage.getItem("myCart"));
    this.prepareCart();
  }
  prepareCart() {
    this.rawCart.forEach((cart) => {
      appSettings.productList.forEach((prod) => {
        if (prod.id == cart.id) {
          let ttlPrice = cart.qty * prod.price;
          this.cartItems.push({
            id: cart.id,
            name: prod.name,
            price: prod.price,
            qty: cart.qty,
            ttlPrice: ttlPrice,
          });
        }
      });
    });
  }

  emptyCart() {
    localStorage.clear();
    this.updateCart();
  }

  updateCart() {
    this.rawCart = !localStorage.getItem("myCart")
      ? []
      : JSON.parse(localStorage.getItem("myCart"));
    this.cartItems = [];
    this.prepareCart();
  }

  addQty(itemId, itemQty) {
    var addItemQty = JSON.parse(localStorage.getItem("myCart")) || []; //make an array to work

    if (addItemQty.length === 0) {
      //checking if array is empty or not
      addItemQty.push({ id: itemId, qty: itemQty });
    } else {
      var item = addItemQty.find((item) => item.id == itemId); //add according to id
    }
    for (var item of addItemQty) {
      //incrementation of qty
      if (item.id == itemId) {
        item.qty++;
      }
    }
    localStorage.setItem("myCart", JSON.stringify(addItemQty)); //setting my back array after working to myCart
    this.updateCart();
  }

  removeQty(itemId, itemQty) {
    var removeItemQty = JSON.parse(localStorage.getItem("myCart")) || [];

    if (removeItemQty.length === 0) {
      removeItemQty.push({ id: itemId, qty: itemQty });
    } else {
      var item = removeItemQty.find((item) => item.id == itemId);
    }
    for (var item of removeItemQty) {
      if (item.id == itemId) {
        item.qty--;
      }
    }
    if (itemQty <= 1) {
      removeItemQty.splice(removeItemQty.indexOf(item), 1);
    }
    localStorage.setItem("myCart", JSON.stringify(removeItemQty));
    this.updateCart();
  }
}
