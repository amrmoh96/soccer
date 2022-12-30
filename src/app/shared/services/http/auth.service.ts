import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public api: string = `${environment.api}/auth`;
  constructor(private http: HttpClient) { }
  public login(loginCredientails: UserLogin) {
    return this.http.post<UserLogin>(`${this.api}/login`, loginCredientails).pipe()
  }
  public register(loginCredientails: UserLogin) {
    return this.http.post<any>(`${this.api}/register`, loginCredientails).pipe()
  }

}
