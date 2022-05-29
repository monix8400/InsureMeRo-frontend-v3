import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {InsuranceService} from "../../services/insurance.service";
import {Router} from "@angular/router";

@Component({
  selector: 'create-insurance-stepper',
  templateUrl: './create-insurance-stepper.component.html',
  styleUrls: ['./create-insurance-stepper.component.scss']
})
export class CreateInsuranceStepperComponent implements OnInit {
  personTypeForm = new FormGroup({
    responsePT: new FormControl(),
  });
  personTypeI: any;
  personType: any;

  personalInfo: any;
  vehicleInfo: any;
  driversInfo: any;
  startDate: any;
  nrValabilityMonths: any;

  constructor(private insuranceService: InsuranceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onNextPersonType() {
    this.changePersonType()
  }

  changePersonType() {
    this.personTypeI = this.personType == 'INDIVIDUAL';
  }

  onClickChoosePersonType(data: any) {
    this.personType = data;
  }

  onClickSendPI(data: any) {
    this.personalInfo = data;
    this.personalInfo.name = `${data.firstname} ${data.lastname}`;
    return this.personalInfo
  }

  onClickSendVI(data: any) {
    this.vehicleInfo = data;
    return this.vehicleInfo
  }

  onClickSendDL(data: any) {
    this.driversInfo = data;
    return this.driversInfo
  }

  onClickSendST(data: any) {
    this.startDate = data;
  }

  onClickSendValabilityMonths(data: any) {
    this.nrValabilityMonths = data;
  }

  createInsurance() {
    this.personalInfo.personType = this.personType;
    let address = this.personalInfo.address;
    delete this.personalInfo.address;

    let object: any = {
      "address": address,
      "personalInfo": this.personalInfo,
      "vehicle": this.vehicleInfo,
      "driverList": this.driversInfo.drivers,
      "startDate": this.startDate,
      "months": this.nrValabilityMonths,
    }
    console.log(object)
    let insuranceId;
    this.insuranceService.createInsurance(object).subscribe((response) => {
      insuranceId = response;
      console.log("InsuranceID: " + insuranceId)
    });
    this.router.navigate(['show-insurance-price'], {state: {insurId: 'insuranceId'}});
  }

}
