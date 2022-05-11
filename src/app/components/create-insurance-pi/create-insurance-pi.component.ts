import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {PersonalInfo} from "../../models/personalInfo";
import {Address} from "../../models/address";
import {PersonalInfoService} from "../../services/personal-info.service";

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
  personalInfo: any;
  address: any;

  constructor(private router: Router, private personalInfoService: PersonalInfoService) {
  }

  ngOnInit(): void {
  }

  onClick() {
    let name = this.personalInfoForm.controls['firstname'].value + ' ' + this.personalInfoForm.controls['lastname'].value;
    let idSeries = this.personalInfoForm.controls['idSeries'].value;
    let idNr = this.personalInfoForm.controls['idNumber'].value;
    let code = this.personalInfoForm.controls['cnpCode'].value;

    let city = this.personalInfoForm.controls['city'].value;
    let county = this.personalInfoForm.controls['county'].value;
    let street = this.personalInfoForm.controls['street'].value;
    let number = this.personalInfoForm.controls['number'].value;
    let zip = this.personalInfoForm.controls['zip'].value

    this.address = new Address(county, city, street, number, zip)
    this.personalInfo = new PersonalInfo("INDIVIDUAL", name, idSeries, idNr, code, this.address);

    console.log(this.personalInfo);
    this.personalInfoService.addPersonalInfo(this.personalInfo);
    // this.router.navigateByUrl('create-insurance-ci').then(r => console.log(r));
  }

  onNext() {
    console.log(this.personalInfoForm.value)
    this.onClick()
  }
}
