export class Driver {
  id: number | undefined;
  name: string;
  personalIdentificationNumber: string;
  identityCardSeries: string;
  identityCardNr: string;
  insuranceId: number;

  constructor(name = "", personalIdentificationNumber = "", identityCardSeries = "", identityCardNr: "", insuranceId: number) {
    this.name = name;
    this.personalIdentificationNumber = personalIdentificationNumber;
    this.identityCardSeries = identityCardSeries;
    this.identityCardNr = identityCardNr;
    this.insuranceId = insuranceId;
  }
}
