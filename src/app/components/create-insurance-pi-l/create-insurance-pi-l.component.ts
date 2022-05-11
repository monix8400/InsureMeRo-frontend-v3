import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Address} from "../../models/address";
import {PersonalInfo} from "../../models/personalInfo";
import {Router} from "@angular/router";
import {PersonalInfoService} from "../../services/personal-info.service";

@Component({
  selector: 'create-insurance-pi-l',
  templateUrl: './create-insurance-pi-l.component.html',
  styleUrls: ['./create-insurance-pi-l.component.css']
})
export class CreateInsurancePiLComponent implements OnInit {
  personalInfoForm = new FormGroup({
    name: new FormControl(),
    identificationNr: new FormControl(),
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
    let name = this.personalInfoForm.controls['name'].value;
    let code = this.personalInfoForm.controls['identificationNr'].value;

    let city = this.personalInfoForm.controls['city'].value;
    let county = this.personalInfoForm.controls['county'].value;
    let street = this.personalInfoForm.controls['street'].value;
    let number = this.personalInfoForm.controls['number'].value;
    let zip = this.personalInfoForm.controls['zip'].value

    this.address = new Address(county, city, street, number, zip)
    this.personalInfo = new PersonalInfo(" LEGAL_PERSON", name, "", "", code, this.address);

    console.log(this.personalInfo);
    this.personalInfoService.addPersonalInfo(this.personalInfo);
    this.router.navigateByUrl('create-insurance-v').then(r => console.log(r));
  }

  onNext() {
    console.log(this.personalInfoForm.value)
    this.onClick()
  }
}
