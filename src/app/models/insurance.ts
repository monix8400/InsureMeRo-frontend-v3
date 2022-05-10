import {PersonalInfo} from "./personalInfo";
import {User} from "./user";
import {Driver} from "./driver";
import {Vehicle} from "./vehicle";

export class Insurance {
  issueDate: Date;
  validFrom: Date;
  validTo: Date;
  price: number;
  personalInfo: PersonalInfo;
  vehicle: Vehicle;
  user: User;
  drivers:Driver[];

  constructor(issueDate: Date, validFrom: Date, validTo: Date, price: 0.0, personalInfo: PersonalInfo, vehicle: Vehicle, user: User, drivers: Driver[]) {
    this.issueDate = issueDate;
    this.validFrom = validFrom;
    this.validTo = validTo;
    this.price = price;
    this.personalInfo = personalInfo;
    this.vehicle = vehicle;
    this.user = user;
    this.drivers = drivers;
  }
}
