// import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// import Jspdf from "jspdf";
// import {InsuranceService} from "../../services/insurance.service";
//
// @Component({
//   selector: 'html-to-pdf-insurance',
//   templateUrl: './html-to-pdf-show-insurance-price.component.html',
//   styleUrls: ['./html-to-pdf-show-insurance-price.component.scss']
// })
// export class HtmlToPdfInsuranceComponent implements OnInit {
//   insurances: [] = [];
//   lastInsurance: any;
//
//   @ViewChild('content', {static: false}) el!: ElementRef;
//
//
//   constructor(private insuranceService: InsuranceService) {
//   }
//
//   ngOnInit(): void {
//     this.getInsurancesForCurrentUser()
//   }
//
//   getInsurancesForCurrentUser() {
//     this.insuranceService.getInsurancesForCurrentUser().subscribe((data) => {
//       this.insurances = data;
//       this.getLastGeneratedInsurance()
//     });
//   }
//
//   getLastGeneratedInsurance() {
//     this.lastInsurance = this.insurances[this.insurances.length - 1]
//     console.log(this.lastInsurance)
//   }
//
//   getAddress() {
//     let streetAndNumber = this.lastInsurance.address.street + " " + this.lastInsurance.address.number
//     let county = this.lastInsurance.address.county
//     let city = this.lastInsurance.address.city
//     let zip = this.lastInsurance.address.zipCode
//     let buildAddress = streetAndNumber + " <p>ceva</p> " + city + ", " + county + "\n" + zip
//     return buildAddress;
//   }
//
//   makePdf() {
//     let pdf = new Jspdf('p', 'pt', 'a4')
//     pdf.html(this.el.nativeElement, {
//       callback: (pdf) => {
//         pdf.setFontSize(11)
//         pdf.setTextColor(0, 0, 0)
//         pdf.save("name-car.pdf")
//       }
//     })
//   }
//
//   getVehicle() {
//
//   }
// }
