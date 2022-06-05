import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Vehicle} from "../../models/vehicle";

@Component({
  selector: 'create-insurance-v',
  templateUrl: './create-insurance-v.component.html',
  styleUrls: ['./create-insurance-v.component.scss']
})
export class CreateInsuranceVComponent implements OnInit {
  @Input()
  vehicleForm: FormGroup = new FormGroup({});

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
