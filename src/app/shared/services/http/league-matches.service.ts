import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeagueMatchesService {

  private api: string = `${environment.api}/leaguematchs`;
  constructor(private http: HttpClient) { }

  public getLeagueMatchesByTeamId(teamId: number) {
    return this.http.get(`${this.api}/team/${teamId}`)
  }

  public getLeagueMatchesByLeagueId(leagueId: number) {
    return this.http.get(`${this.api}/${leagueId}`).pipe(
      map((res: any) => {
        // get Matches that will be played in future and sot them with nearest date
        const toBePlayedMatches = res.filter((M: any) => new Date(M.matchDate).getTime() >= new Date().getTime())
          .sort((a: any, b: any) => { return new Date(a.matchDate).getTime() - new Date(b.matchDate).getTime() });
        
          // get Matches that already played
        const playedMatches = res.filter((M: any) => new Date(M.matchDate).getTime() < new Date().getTime());
        
        // return them combined after the sort
        return [...toBePlayedMatches, ...playedMatches]
      })
    )
  }

}
