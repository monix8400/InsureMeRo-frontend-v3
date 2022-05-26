import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PersonalInfo} from "../../models/personalInfo";

@Component({
  selector: 'create-insurance-pi-i',
  templateUrl: './create-insurance-pi-i.component.html',
  styleUrls: ['./create-insurance-pi-i.component.scss']
})
export class CreateInsurancePiIComponent implements OnInit {
  personalInfoForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    identityCardSeries: new FormControl(),
    identityCardNr: new FormControl(),
    code: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      county: new FormControl(),
      street: new FormControl(),
      number: new FormControl(),
      zip: new FormControl()
    }),
  });

  @Output() sendPersonInformation = new EventEmitter<PersonalInfo>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    let personalInfo = this.personalInfoForm.getRawValue();
    this.sendPersonInformation.emit(personalInfo);
  }

  onNext() {
    this.onClick()
  }
}
