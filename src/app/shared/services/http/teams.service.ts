import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GeneralResponse } from '../../models/generalResponse.model';
import { Team } from '../../models/Team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  public api: string = `${environment.api}/team`;
  constructor(private http: HttpClient) { }
  public createTeam(team: Team) {
    return this.http.post<GeneralResponse>(`${this.api}`, team).pipe()
  }

  public getTeamById(id: number) {
    return this.http.get<Team>(`${this.api}/${id}`).pipe()
  }
  public getAllTeams() {
    return this.http.get<Team[]>(`${this.api}/all`).pipe()
  }
  public getTeamByMemberId(id:number|undefined){
    return this.http.get<Team>(`${this.api}/getByMemebrId/${id}`).pipe()
  }
  public getTeamPlayersByTeamId(id:number){
    return this.http.get<any>(`${this.api}/${id}/players`).pipe()
  }
}
