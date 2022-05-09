import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  email: any;
  firstname: any;
  lastname:any;

  constructor() { }

  ngOnInit(): void {
    this.email = localStorage.getItem("email");
    this.firstname = localStorage.getItem("firstname");
    this.lastname = localStorage.getItem("lastname");
  }

}
