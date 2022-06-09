import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  isEditableLastName = false;
  isEditableFirstName = false;
  isEditableEmail = false;

  @ViewChild('lastname') lastnameInput!: ElementRef
  @ViewChild('firstname') firstnameInput!: ElementRef
  @ViewChild('email') emailInput!: ElementRef

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

  saveNewLastname(value: string) {
    if (this.isEditableLastName) {
      this.lastname = value;
      this.userService.updateUserLastname(this.lastname).subscribe()
      this.isEditableLastName = false;
    } else {
      this.isEditableLastName = true;
    }
  }

  saveNewFirstname(value: string) {
    if (this.isEditableFirstName) {
      this.firstname = value;
      this.userService.updateUserFirstname(this.firstname).subscribe()
      this.isEditableFirstName = false;
    } else {
      this.isEditableFirstName = true;
    }
  }

  saveNewEmail(value: string) {
    if (this.isEditableEmail) {
      this.email = value;
      this.userService.updateUserEmail(this.email).subscribe()
      this.isEditableEmail = false;
    } else {
      this.isEditableEmail = true;
    }
  }

  closeEmail() {
    this.emailInput.nativeElement.value = this.user.email
    this.isEditableEmail = false;
  }

  closeFirstname() {
    this.firstnameInput.nativeElement.value = this.user.firstname
    this.isEditableFirstName = false;
  }

  closeLastname() {
    this.lastnameInput.nativeElement.value = this.user.lastname
    this.isEditableLastName = false;
  }
}
