import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Request } from '../../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  public api: string = `${environment.api}/requests`;
  constructor(private http: HttpClient) { }

  public createRequest(request: Request): Observable<any> {
    return this.http.post(`${this.api}`, request).pipe()
  }

  public getRequestsByPlayerId(playerId: number | undefined): Observable<any> {
    return this.http.get(`${this.api}/${playerId}`).pipe()
  }

  public getUnreadNotificationsCount(playerId: number | undefined): Observable<number> {
    return this.http.get<number>(`${this.api}/unread/${playerId}`).pipe()
  }

}
