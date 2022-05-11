import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private router: Router, private loginService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.login(this.loginForm.value);
  }

  login(user: User) {
    console.log(this.loginForm);
    this.loginService.login(user.email, user.password).subscribe(
      (data) => {
        console.log(data)
        localStorage.setItem("accessToken", data.accessToken)
        this.router.navigate(['/auth-home']).then(r => console.log(r));
        console.log('Login succeeded!');
      },
      () => console.log('Login failed!')
    );
  }


  isValid() {
    return (
      !!this.loginForm.controls['email'].value &&
      !!this.loginForm.controls['password'].value
    );
  }
}
