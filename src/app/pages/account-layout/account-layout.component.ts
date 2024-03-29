import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.scss']
})
export class AccountLayoutComponent implements OnInit {

  menu = [
    {icon:"person",label: 'User Information', routerLink: ['/profile']},
    {icon:"badge",label: 'Saved Information', routerLink: ['saved-account-info']},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
