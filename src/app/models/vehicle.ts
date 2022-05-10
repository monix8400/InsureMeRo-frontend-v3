export class Vehicle {
  registrationNr: string;
  categoryCode: string;
  chassisSeries: string;
  CIVSeries: string;
  make: string;
  model: string;
  yearOfManufacture: Date;
  fuelType: string;
  cylindricalCapacity: number;
  maxNetPower: number;
  maxTotalMass: number;
  seatsNr: number;

  constructor(registrationNr = "", categoryCode = "", chassisSeries = "", CIVSeries = "", make = "", model = "",
              yearOfManufacture: Date, fuelType = "", cylindricalCapacity = 0, maxNetPower = 0, maxTotalMass = 0, seatsNr = 0) {
    this.registrationNr = registrationNr;
    this.categoryCode = categoryCode;
    this.chassisSeries = chassisSeries;
    this.CIVSeries = CIVSeries;
    this.make = make;
    this.model = model;
    this.yearOfManufacture = yearOfManufacture;
    this.fuelType = fuelType;
    this.cylindricalCapacity = cylindricalCapacity;
    this.maxNetPower = maxNetPower;
    this.maxTotalMass = maxTotalMass;
    this.seatsNr = seatsNr;
  }
}
