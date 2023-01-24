import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LeagueModel } from '../../models/league.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  public api: string = `${environment.api}/leagues`;
  constructor(private http: HttpClient) { }

  public getAllLeagues(): Observable<LeagueModel[]> {
    return this.http.get<LeagueModel[]>(`${this.api}`)
  }
  public getLeagueById(id:number): Observable<LeagueModel> {
    return this.http.get<LeagueModel>(`${this.api}/${id}`)
  }
}
