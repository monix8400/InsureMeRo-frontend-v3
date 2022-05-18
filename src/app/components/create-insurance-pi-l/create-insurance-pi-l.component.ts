import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PersonalInfo} from "../../models/personalInfo";

@Component({
  selector: 'create-insurance-pi-l',
  templateUrl: './create-insurance-pi-l.component.html',
  styleUrls: ['./create-insurance-pi-l.component.scss']
})
export class CreateInsurancePiLComponent implements OnInit {
  personalInfoForm = new FormGroup({
    name: new FormControl(),
    identificationNr: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      county: new FormControl(),
      street: new FormControl(),
      number: new FormControl(),
      zip: new FormControl(),
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
