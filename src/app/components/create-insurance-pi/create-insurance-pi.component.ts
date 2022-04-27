import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'create-insurance-pi',
  templateUrl: './create-insurance-pi.component.html',
  styleUrls: ['./create-insurance-pi.component.css']
})
export class CreateInsurancePIComponent implements OnInit {
  personalInfoForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    idSeries: new FormControl(),
    idNumber: new FormControl(),
    cnpCode: new FormControl(),
    city: new FormControl(),
    county: new FormControl(),
    street: new FormControl(),
    number: new FormControl(),
    zip: new FormControl(),
  });

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigateByUrl('create-insurance-ci').then(r => console.log(r));
  }

  onNext() {
    console.log(this.personalInfoForm.value)
    this.onClick()
  }
}
