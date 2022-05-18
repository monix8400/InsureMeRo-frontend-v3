import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'create-insurance-d',
  templateUrl: './create-insurance-d.component.html',
  styleUrls: ['./create-insurance-d.component.scss']
})
export class CreateInsuranceDComponent implements OnInit {
  driverForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    idSeries: new FormControl(),
    idNumber: new FormControl(),
    cnpCode: new FormControl()
  });

  @ViewChild('itemRef') itemRef!: ElementRef;

  @Output() sendDriver = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onNext() {
    this.onClick()
  }

  private onClick() {
    let driverInfo = this.driverForm.getRawValue();
    this.sendDriver.emit(driverInfo)
  }

  deleteAddDriver() {
    let indexOfDriver = Array.from(this.itemRef.nativeElement.parentElement.parentElement.children).indexOf(this.itemRef.nativeElement.parentElement) //Array.from(this.itemRef.nativeElement.parentElement.children).indexOf(this.itemRef.nativeElement);
    this.sendDriver.emit(indexOfDriver)
    this.itemRef.nativeElement.parentElement.parentElement.removeChild(this.itemRef.nativeElement.parentElement) //am modificat in a sterge parentul
  }
}
