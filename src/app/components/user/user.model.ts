import {Address} from "../address/address.model";
/**
 * Created by Dmitriy_Lamzin on 6/27/2017.
 */
export class User {
  id: string;
  name: string;
  username: string;
  phone: string;
  address: Address;



  constructor(obj?: any) {
    this.id = obj && obj.id       || null;
    this.name = obj && obj.name   || null;
    this.username = obj && obj.username   || null;
    this.address = obj && obj.address   || null;
    this.phone = obj && obj.phone   || null;
  }
}
