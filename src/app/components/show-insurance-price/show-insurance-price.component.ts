import {AfterViewInit, Component} from '@angular/core';
import {InsuranceService} from "../../services/insurance.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'show-insurance-price',
  templateUrl: './show-insurance-price.component.html',
  styleUrls: ['./show-insurance-price.component.scss']
})
export class ShowInsurancePriceComponent implements AfterViewInit {
  currentInsurance: any;
  currentInsuranceId: any;
  url: any;

  constructor(private insuranceService: InsuranceService, private route: ActivatedRoute) {
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
    this.insuranceService.getInsurancePdf(this.currentInsuranceId).subscribe(
      (data) => {
        console.log(data)
        let file = new Blob([data], {type: 'application/pdf'})
        let fileURL = URL.createObjectURL(file);

        // if you want to open PDF in new tab
        window.open(fileURL);
        let a = document.createElement('a');
        a.href = fileURL;
        a.target = '_blank';
        a.download = 'insurance.pdf';
        document.body.appendChild(a);
        a.click();
      },
      (error) => {
        console.log('getPDF error: ', error);
      }
    );
  }
}
