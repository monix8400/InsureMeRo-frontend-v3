import {Insurance} from "./insurance";

export class Driver {
  name: string;
  personalIdentificationNumber: string;
  identityCardSeries: string;
  identityCardNr: string;
  insurance: Insurance;

  constructor(name="", personalIdentificationNumber="", identityCardSeries="", identityCardNr:"", insurance: Insurance) {
    this.name = name;
    this.personalIdentificationNumber = personalIdentificationNumber;
    this.identityCardSeries = identityCardSeries;
    this.identityCardNr = identityCardNr;
    this.insurance = insurance;
  }
}
