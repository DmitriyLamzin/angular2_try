import {Inject, Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Message} from "../components/message/message.model";
import {BASE_URL, MESSAGE_API_URL} from "../environment";
import 'rxjs/add/operator/map'
import {isUndefined} from "util";
/**
 * Created by Dmitriy_Lamzin on 6/27/2017.
 */


@Injectable()
export class MessageService {
  private url: string;

  constructor(private http: Http,
              @Inject(BASE_URL) private baseApiUrl: string,
              @Inject(MESSAGE_API_URL) private messageApiUrl: string) {
    this.url = `${baseApiUrl}${messageApiUrl}`;
    console.info(baseApiUrl);
    console.info(messageApiUrl)

  }

  getMessageById(id: any): Observable<Message> {
    return this.http.get(`${this.url}/${id}`)
      .map((response: Response) => {
        return new Message(response.json())
      })
  }

  getAllMessages(userId?: string, pageNumber?: number, pageSize?: number): Observable<Message[]> {
    let params: string = [
      `${!isUndefined(userId) ? 'userId='+userId : ''}`,
      `${!isNaN(pageNumber) ? '_page='+pageNumber : ''}`,
      `${!isNaN(pageSize) ? '_limit='+pageSize : ''}`,

    ].join('&');

    let query: string = `${this.url}?${params}`;

    // return null;
    return this.http.get(query)
      .map((response: Response) => {
        return (<any>response.json()).map(item => {
          return new Message(item);
        });
      })
  }


  postMessage(obj: any) {
    this.http.post(this.url, obj).subscribe((response: Response) => {
      console.log(response.json())
    })
  }
}
