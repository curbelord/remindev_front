import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { UserIn } from '../../models/user-in';
import { PartialUser } from '../../models/partial-user';
import { FullUser } from '../../models/full-user';
import { environment } from '../../../../environments/environment.development';
import { InvalidNickEmailMsg } from '../../models/invalid-nick-email-msg';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _http = inject<HttpClient>(HttpClient);
  private baseUrl: string = environment.host;
  userId: string = "";
  userNick: string = "";

  constructor() { }

  public register = (userData: PartialUser | FullUser): Observable<UserIn> => {
    return this._http.post<UserIn>(`${this.baseUrl}/register`, userData);
  }

  public validateNick = (nick: string): Observable<InvalidNickEmailMsg> => {
    return this._http.post<InvalidNickEmailMsg>(`${this.baseUrl}/register/validate-nick`, {columnName: 'nick', columnData: nick});
  }

  public validateEmail = (email: string): Observable<InvalidNickEmailMsg> => {
    return this._http.post<InvalidNickEmailMsg>(`${this.baseUrl}/register/validate-email`, {columnName: 'email', columnData: email});
  }
}
