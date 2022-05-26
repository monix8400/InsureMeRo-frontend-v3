export class PersonalInfo {
  id: number | undefined;
  personType: string; //0-individual, 1-legalPerson
  name: string;
  identityCardSeries: string;
  identityCardNr: string;
  code: string;
  addressId: number;
  bonusMalus: string

  constructor(personType = "INDIVIDUAL", name = "", identityCardSeries = "", identityCardNr = "", code = "", addressId: number, bonusMalus = "b0") {
    this.personType = personType;
    this.name = name;
    this.identityCardSeries = identityCardSeries;
    this.identityCardNr = identityCardNr;
    this.code = code;
    this.addressId = addressId;
    this.bonusMalus = bonusMalus;
  }
}
