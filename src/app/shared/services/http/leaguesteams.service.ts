import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LeagueModel } from '../../models/league.model';

@Injectable({
  providedIn: 'root'
})
export class LeaguesteamsService {

  public api: string = `${environment.api}/leaguereagisteredteams`;
  constructor(private http: HttpClient) { }

  public getLeagueRegisterTeams(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/${id}`)
  }
  public getAllRegisteredTeamsToLeagueByTeamId(teamId: number) {
    return this.http.get<any[]>(`${this.api}/leagues/${teamId}`).pipe(
      map((res: LeagueModel[]) => {
        // get leagues to be played in future and sort them by nearest date
        const toBePlayedLeagues = res.filter((L: LeagueModel) => new Date(L.leagueStartDate).getTime() > new Date().getTime())
          .sort((a: LeagueModel, b: LeagueModel) => new Date(a.leagueStartDate || 0).getTime() - new Date(b.leagueStartDate || 0).getTime())

        // get leagues that already played 
        const PlayedLeagues = res.filter((L: LeagueModel) => new Date(L.leagueStartDate).getTime() < new Date().getTime())

        // return 2 leagues arrays combined
        return [...toBePlayedLeagues, ...PlayedLeagues]
      })
    )
  }

  public registerTeamToLeague(leagueteam: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.api}`, leagueteam)
  }
}
