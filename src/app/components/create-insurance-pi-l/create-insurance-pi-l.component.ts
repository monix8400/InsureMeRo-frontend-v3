import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {PersonalInfo} from "../../models/personalInfo";

@Component({
  selector: 'create-insurance-pi-l',
  templateUrl: './create-insurance-pi-l.component.html',
  styleUrls: ['./create-insurance-pi-l.component.scss']
})
export class CreateInsurancePiLComponent implements OnInit {
  @Input()
  personalInfoForm: FormGroup = new FormGroup({});

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
