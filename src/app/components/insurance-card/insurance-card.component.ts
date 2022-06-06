import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import * as moment from "moment";
import {InsuranceService} from "../../services/insurance.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'insurance-card',
  templateUrl: './insurance-card.component.html',
  styleUrls: ['./insurance-card.component.scss']
})
export class InsuranceCardComponent implements OnInit, AfterViewInit {
  @Input() insurance: any;
  isExpired: boolean = false;
  @ViewChild('insuranceCard') insuranceCard!: ElementRef;

  constructor(private renderer: Renderer2, private insuranceService:InsuranceService, private snackBar: MatSnackBar) {
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

  seeInsurance(insuranceElement: any) {
    let insuranceId = insuranceElement.id;
    console.log(insuranceId)
    this.insuranceService.getInsurancePdf(insuranceId).subscribe({
      next: (data)=>{
        console.log(data)
        let file = new Blob([data], {type: 'application/pdf'})
        let fileURL = URL.createObjectURL(file);

        window.open(fileURL);
      },
      error: (error) => {
        console.log('getPDF error: ', error);
        this.snackBar.open("Something went wrong. We can't generate the PDF.", "close", {
          duration: 2000,
          panelClass: ['warn-snackBar']
        })
      }
    })

  }
}
