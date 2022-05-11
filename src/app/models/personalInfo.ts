import {Address} from "./address";

export class PersonalInfo {
  personType: string; //1-individual, 2-legalPerson
  name: string;
  identityCardSeries: string;
  identityCardNr: string;
  code: string;
  address: Address;

  constructor(personType="INDIVIDUAL", name="", identityCardSeries="", identityCardNr="", code="", address: Address) {
    this.personType = personType;
    this.name = name;
    this.identityCardSeries = identityCardSeries;
    this.identityCardNr = identityCardNr;
    this.code = code;
    this.address = address;
  }
}
