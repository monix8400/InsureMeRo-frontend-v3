import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'create-insurance-ci',
  templateUrl: './create-insurance-ci.component.html',
  styleUrls: ['./create-insurance-ci.component.css']
})
export class CreateInsuranceCIComponent implements OnInit {
  carInfoForm= new FormGroup({
    registrationNr:  new FormControl(),
    category:  new FormControl(),
    make:  new FormControl(),
    model:  new FormControl(),
    fuelType:  new FormControl(),
    chassisSeries:  new FormControl(),
    CIVSeries:  new FormControl(),
    yearOfManufacture:  new FormControl(),
    cylindricalCapacity:  new FormControl(),
    maxNetPower:  new FormControl(),
    maxTotalMass:  new FormControl(),
    seatsNr:  new FormControl(),
  });

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigateByUrl('create-insurance-ci');
  }

  onNext() {
    console.log(this.carInfoForm.value)
    this.onClick()
  }
}
