import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {InsuranceService} from "../../services/insurance.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'create-insurance-stepper',
  templateUrl: './create-insurance-stepper.component.html',
  styleUrls: ['./create-insurance-stepper.component.scss']
})
export class CreateInsuranceStepperComponent implements OnInit {
  personTypeForm = new FormGroup({
    responsePT: new FormControl(),
  });

  personalInfoIForm = new FormGroup({
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
      zipCode: new FormControl()
    }),
  });

  personalInfoLPForm = new FormGroup({
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

  vehicleForm = new FormGroup({
    registrationNr: new FormControl(),
    categoryCode: new FormControl(),
    make: new FormControl(),
    model: new FormControl(),
    fuelType: new FormControl(),
    chassisSeries: new FormControl(),
    civseries: new FormControl(),
    yearOfManufacture: new FormControl(),
    cylindricalCapacity: new FormControl(),
    maxNetPower: new FormControl(),
    maxTotalMass: new FormControl(),
    seatsNr: new FormControl(),
  });

  driversForm = new FormGroup({
    drivers: new FormArray([]),
  });


  personTypeI: any;
  personType: any;

  personalInfo: any;
  vehicleInfo: any;
  driversInfo: any;
  startDate: any;
  nrValabilityMonths: any;

  constructor(private insuranceService: InsuranceService, private router: Router, private snackBar: MatSnackBar) {
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
    if (this.startDate == null) {
      this.snackBar.open("Please choose your start date", "close", {
        duration: 2000,
        panelClass: ['warn-snackBar']
      })
    } else if (this.nrValabilityMonths == null) {
      this.snackBar.open("Please choose nr of months", "close", {
        duration: 2000,
        panelClass: ['warn-snackBar']
      })
    } else {
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

}
