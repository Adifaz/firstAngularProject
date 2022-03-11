import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {
  addId;
  listAddressDetails:any = []; 
  detailsToEdit:any = [];
  showForm:Boolean = true;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.listAddressDetails = !localStorage.getItem("addressDetails")
    ? []
    : JSON.parse(localStorage.getItem("addressDetails"));
      this.route.params.subscribe((res) => {
      this.addId = res["addId"];
      this.getIndex();
    });
  }

  getIndex() {
    this.listAddressDetails.forEach((item,index) => {
      if(item.email == this.addId) {
        this.detailsToEdit.push({name:item.name,email:item.email,hobby:item.hobby,id:index});
      }
    });
  }

  onSubmitEdit(editData:NgForm) {
      this.listAddressDetails.forEach((item,index) => {
        this.detailsToEdit.forEach((edit) => {
          if(index == edit.id) {
            item.name = editData.value.fname;
            item.email = editData.value.email;
            item.hobby = editData.value.hobby;
          }
        });
      });
      localStorage.setItem("addressDetails",JSON.stringify(this.listAddressDetails));
      editData.reset();
      this.showForm = false;
  }

}
