export class User{
  firstname:string;
  lastname:string;
  email:string;
  password:string;
  loggedIn:boolean;

  constructor(firstname="", lastname="", email="", password="", loggedIn=false) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.loggedIn = loggedIn;
  }
}
