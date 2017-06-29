/**
 * Created by Dmitriy_Lamzin on 6/28/2017.
 */
export class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;



  constructor(obj?: any) {
    this.street = obj && obj.street       || null;
    this.suite = obj && obj.suite   || null;
    this.city = obj && obj.city   || null;
    this.zipcode = obj && obj.zipcode   || null;
  }
}
