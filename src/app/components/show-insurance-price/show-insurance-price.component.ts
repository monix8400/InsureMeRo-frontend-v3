import {AfterViewInit, Component} from '@angular/core';
import {InsuranceService} from "../../services/insurance.service";
import {ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'show-insurance-price',
  templateUrl: './show-insurance-price.component.html',
  styleUrls: ['./show-insurance-price.component.scss']
})
export class ShowInsurancePriceComponent implements AfterViewInit {
  currentInsurance: any;
  currentInsuranceId: any;
  url: any;

  constructor(private insuranceService: InsuranceService, private route: ActivatedRoute, private snackBar: MatSnackBar) {
    this.currentInsuranceId = this.route.snapshot.paramMap.get('insurId');
    this.url = "http://localhost:8080/insurance/getInsurancePdf/" + this.currentInsuranceId
    // console.log("current Insurance ID: " + this.currentInsuranceId);
    this.getInsuranceById(this.currentInsuranceId)
  }

  ngAfterViewInit(): void {
  }

  getInsuranceById(currentInsuranceId: number) {
    this.insuranceService.getInsuranceById(currentInsuranceId).subscribe((data) => {
      this.currentInsurance = data;
      // console.log("current Insurance: " + this.currentInsurance);
    })
  }


  download() {
    this.insuranceService.getInsurancePdf(this.currentInsuranceId).subscribe({
      next: (data) => {
        console.log(data)
        let file = new Blob([data], {type: 'application/pdf'})
        let fileURL = URL.createObjectURL(file);

        window.open(fileURL);
        let a = document.createElement('a');
        a.href = fileURL;
        a.target = '_blank';
        a.download = 'insurance.pdf';
        document.body.appendChild(a);
        a.click();
      },
      error: (error) => {
        console.log('getPDF error: ', error);
        this.snackBar.open("Something went wrong. We can't generate the PDF.", "close", {
          duration: 2000,
          panelClass: ['warn-snackBar']
        })
      }
    });
  }
}
