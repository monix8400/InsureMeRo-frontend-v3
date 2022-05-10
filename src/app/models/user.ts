export class User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;

  constructor(firstname = "", lastname = "", email = "", password = "", role = "") {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
