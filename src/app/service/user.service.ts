import {BASE_URL, MESSAGE_API_URL, USER_API_URL} from "../environment";
import {Inject, Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {User} from "../components/user/user.model";
/**
 * Created by Dmitriy_Lamzin on 6/27/2017.
 */

@Injectable()
export class UserService {
  private url: string;

  constructor(private http: Http,
              @Inject(BASE_URL) private baseApiUrl: string,
              @Inject(USER_API_URL) private userApiUrl: string) {
    this.url = `${baseApiUrl}${userApiUrl}`;
    console.info(baseApiUrl);
    console.info(userApiUrl)
  }

  getUserById(id: any): Observable<User> {
    return this.http.get(`${this.url}/${id}`)
        .map((response: Response) => {
          return new User(response.json())
        })
  }
}
