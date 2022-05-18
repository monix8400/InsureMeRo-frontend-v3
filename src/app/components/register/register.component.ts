import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User = new User();

  registerForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm.value)
    this.user.firstname = this.registerForm.value['firstname']
    this.user.lastname = this.registerForm.value['lastname']
    this.user.email = this.registerForm.value['email']
    if (this.registerForm.value['password']==this.registerForm.value['confirmPassword']) {
      this.user.password = this.registerForm.value['password']
    }
    this.userService.addUser(this.user)
  }
}
