import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  listAddressDetails:any = [];  
  constructor() { }

  ngOnInit() {
    this.listAddressDetails = !localStorage.getItem("addressDetails")
      ? []
      : JSON.parse(localStorage.getItem("addressDetails"));
  }
  
 
}
