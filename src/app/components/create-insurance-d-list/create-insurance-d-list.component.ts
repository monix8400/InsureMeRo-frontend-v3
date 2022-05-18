import {Component, ComponentRef, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {CreateInsuranceDComponent} from "../create-insurance-d/create-insurance-d.component";
import {FormArray, FormGroup} from "@angular/forms";

@Component({
  selector: 'create-insurance-d-list',
  templateUrl: './create-insurance-d-list.component.html',
  styleUrls: ['./create-insurance-d-list.component.scss']
})
export class CreateInsuranceDListComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef})
  container!: ViewContainerRef;
  component!: ComponentRef<CreateInsuranceDComponent>;

  driversForm = new FormGroup({
    drivers: new FormArray([]),
  });

  @Output() sendDriversList = new EventEmitter<any>();
  result: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  addDriver() {
    this.component = this.container.createComponent(CreateInsuranceDComponent);
    this.component.instance.sendDriver.subscribe((val)=>this.deleteDriver(val))

    console.log(this.container.length)
    let drivers = this.driversForm.controls["drivers"] as FormArray;
    drivers.push(this.component.instance.driverForm)
  }

  sendDrivers() {
    this.sendDriversList.emit(this.driversForm.getRawValue())
  }

  deleteDriver(indexDriver : number) {
    let drivers = this.driversForm.controls["drivers"] as FormArray;
    drivers.removeAt(indexDriver)
  }
}
