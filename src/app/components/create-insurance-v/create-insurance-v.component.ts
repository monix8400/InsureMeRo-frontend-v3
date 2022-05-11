import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'create-insurance-v',
  templateUrl: './create-insurance-v.component.html',
  styleUrls: ['./create-insurance-v.component.css']
})
export class CreateInsuranceVComponent implements OnInit {
  vehicleForm= new FormGroup({
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
    this.router.navigateByUrl('create-insurance-choose-d');
  }

  onNext() {
    console.log(this.vehicleForm.value)
    this.onClick()
  }
}
