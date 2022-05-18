import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Vehicle} from "../../models/vehicle";

@Component({
  selector: 'create-insurance-v',
  templateUrl: './create-insurance-v.component.html',
  styleUrls: ['./create-insurance-v.component.scss']
})
export class CreateInsuranceVComponent implements OnInit {
  vehicleForm = new FormGroup({
    registrationNr: new FormControl(),
    category: new FormControl(),
    make: new FormControl(),
    model: new FormControl(),
    fuelType: new FormControl(),
    chassisSeries: new FormControl(),
    CIVSeries: new FormControl(),
    yearOfManufacture: new FormControl(),
    cylindricalCapacity: new FormControl(),
    maxNetPower: new FormControl(),
    maxTotalMass: new FormControl(),
    seatsNr: new FormControl(),
  });

  @Output() sendVehicleInformation = new EventEmitter<Vehicle>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    let vehicleInfo = this.vehicleForm.getRawValue();
    this.sendVehicleInformation.emit(vehicleInfo);
  }

  onNext() {
    this.onClick()
  }
}
