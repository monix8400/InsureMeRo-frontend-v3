import {Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild} from '@angular/core';


@Component({
  selector: 'create-insurance-choose-type-pi',
  templateUrl: './create-insurance-choose-type-pi.component.html',
  styleUrls: ['./create-insurance-choose-type-pi.component.scss']
})
export class CreateInsuranceChooseTypePiComponent implements OnInit {

  @Output() sendPersonType = new EventEmitter<string>();

  @ViewChild('btnI') btnI!: ElementRef;

  @ViewChild('btnL') btnL!: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  onClick(personType: string) {
    this.sendPersonType.emit(personType);
    if (personType == "INDIVIDUAL") {
      this.renderer.addClass(this.btnI.nativeElement, "active");
      this.renderer.removeClass(this.btnL.nativeElement, "active");
    } else {
      this.renderer.addClass(this.btnL.nativeElement, "active");
      this.renderer.removeClass(this.btnI.nativeElement, "active");
    }
  }
}
