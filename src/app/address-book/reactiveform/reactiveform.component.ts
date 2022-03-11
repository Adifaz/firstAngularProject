import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-reactiveform",
  templateUrl: "./reactiveform.component.html",
  styleUrls: ["./reactiveform.component.css"],
})
export class ReactiveformComponent implements OnInit {
  signupForm: FormGroup;
  genders = ["male", "female"];
  rctvFormDetails:any = !localStorage.getItem("rctvDetails")
      ? []
      : JSON.parse(localStorage.getItem("rctvDetails"));
  clrHobbies:any = [];

  constructor() {}
  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });
  }
  onSubmit() {
    console.log(this.signupForm.value.hobbies);
    this.rctvFormDetails.push({
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      gender: this.signupForm.value.gender,
      hobbies: this.signupForm.value.hobbies
    });
    console.log(this.rctvFormDetails);
    localStorage.setItem('rctvDetails',JSON.stringify(this.rctvFormDetails));
    this.signupForm.reset();
    
  }
  onAddHobby() {
    const abc = new FormControl("adeeb", Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(abc);
  }
}
