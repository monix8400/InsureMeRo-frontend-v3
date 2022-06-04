import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'insurance-card',
  templateUrl: './insurance-card.component.html',
  styleUrls: ['./insurance-card.component.scss']
})
export class InsuranceCardComponent implements OnInit, AfterViewInit {
  @Input() insurance: any;
  isExpired: boolean = false;
  @ViewChild('insuranceCard') insuranceCard!: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {

    let expireDate = moment(this.insurance.insurance.validTo, "YYYY-MM-DD");
    let expireDateWithout30Days = expireDate.subtract(30, "days")
    // console.log(expireDateWithout30Days.format("YYYY-MM-DD"))
    this.isExpired = expireDateWithout30Days.isBefore(moment())
    // console.log(this.isExpired);
  }

  ngAfterViewInit() {
    if (this.isExpired) {
      this.renderer.addClass(this.insuranceCard.nativeElement, "expired")
    } else {
      this.renderer.removeClass(this.insuranceCard.nativeElement, "expired")
    }
  }
}
