import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user: User = new User();
  email: any;
  firstname: any;
  lastname: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getCurrentUser()
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe((data) => {
      this.user = data;
    });
  }

  getEmail() {
    return this.email = this.user.email;
  }

  getFirstname() {
    return this.firstname = this.user.firstname;
  }

  getLastname() {
    return this.lastname = this.user.lastname;
  }
}
