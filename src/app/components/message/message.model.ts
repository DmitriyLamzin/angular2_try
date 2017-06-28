/**
 * Created by Dmitriy_Lamzin on 6/27/2017.
 */
export class Message {
  userId: string;
  id: number;
  title: string;
  body: string;


  constructor(obj?: any) {
    this.userId = obj && obj.userId || null;
    this.id = obj && obj.id         || null;
    this.title = obj && obj.title   || null;
    this.body = obj && obj.body     || null;
  }
}
