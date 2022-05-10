export class Address{
  county:string;
  city:string;
  street:string;
  number:string;
  zipCode:number;

  constructor(county="", city="", street="", number="", zipCode=0) {
    this.county = county;
    this.city = city;
    this.street = street;
    this.number = number;
    this.zipCode = zipCode;
  }
}
