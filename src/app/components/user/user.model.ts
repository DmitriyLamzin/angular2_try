/**
 * Created by Dmitriy_Lamzin on 6/27/2017.
 */
export class User {
  id: string;
  name: string;
  username: string;



  constructor(obj?: any) {
    this.id = obj && obj.id       || null;
    this.name = obj && obj.name   || null;
    this.username = obj && obj.username   || null;
  }
}
