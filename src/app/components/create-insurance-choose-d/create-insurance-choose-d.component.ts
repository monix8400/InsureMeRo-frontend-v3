import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'create-insurance-choose-d',
  templateUrl: './create-insurance-choose-d.component.html',
  styleUrls: ['./create-insurance-choose-d.component.css']
})
export class CreateInsuranceChooseDComponent implements OnInit {
  driversForm = new FormGroup({
    response: new FormControl(),
  });

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  onNext() {
    if(this.driversForm.controls['response'].value=="yes"){
      this.router.navigateByUrl('create-insurance-d');
    }
    else{
      console.log("nu avem")
    }
  }
}
