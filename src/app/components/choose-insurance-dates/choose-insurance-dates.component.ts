import {Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'choose-insurance-dates',
  templateUrl: './choose-insurance-dates.component.html',
  styleUrls: ['./choose-insurance-dates.component.scss']
})
export class ChooseInsuranceDatesComponent implements OnInit {
  selected: any;

  @Output() sendStartDate = new EventEmitter<Date>();
  @Output() sendNrMonths = new EventEmitter<number>();
  @ViewChild('btn6') btn6!: ElementRef;
  @ViewChild('btn12') btn12!: ElementRef;


  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  selectedMonths(nrMonths: number) {
    this.sendNrMonths.emit(nrMonths);
    if (nrMonths == 6) {
      this.renderer.addClass(this.btn6.nativeElement, "active");
      this.renderer.removeClass(this.btn12.nativeElement, "active");
      this.sendNrMonths.emit(6)
    } else {
      this.renderer.addClass(this.btn12.nativeElement, "active");
      this.renderer.removeClass(this.btn6.nativeElement, "active");
      this.sendNrMonths.emit(12)
    }
  }

  getChangedValue(data: any) {
    this.selected = data.format("YYYY-MM-DD");
    console.log(this.selected)
    this.sendStartDate.emit(this.selected)
  }
}
