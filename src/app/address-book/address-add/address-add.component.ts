import { Component, OnInit} from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-add',
  templateUrl: './address-add.component.html',
  styleUrls: ['./address-add.component.css']
})
export class AddressAddComponent implements OnInit {
  addressDetails:any = !localStorage.getItem("addressDetails") 
  ? []
  : JSON.parse(localStorage.getItem("addressDetails"));
  showForm:Boolean = true;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData:NgForm) {
    this.addressDetails.push({name:formData.value.fname,email:formData.value.email,hobby:formData.value.hobby});
    localStorage.setItem("addressDetails",JSON.stringify(this.addressDetails));
    formData.reset();
    this.showForm = false;
  }
}
