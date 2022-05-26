import {Driver} from "./driver";

export class Insurance {
  id: number | undefined;
  issueDate: Date;
  validFrom: Date;
  validTo: Date;
  price: number;
  personalInfoId: number;
  vehicleId: number;
  userId: number;
  drivers: Driver[];

  constructor(issueDate: Date, validFrom: Date, validTo: Date, price: 0.0, personalInfoId: number, vehicleId: number, userId: number, drivers: Driver[]) {
    this.issueDate = issueDate;
    this.validFrom = validFrom;
    this.validTo = validTo;
    this.price = price;
    this.personalInfoId = personalInfoId;
    this.vehicleId = vehicleId;
    this.userId = userId;
    this.drivers = drivers;
  }
}
