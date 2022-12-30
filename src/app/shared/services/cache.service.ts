import { UtilityService } from './utility.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TeamsService } from './http/teams.service';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private myTeam$!: Observable<any>;
  constructor(private teamService: TeamsService, private utility: UtilityService) { }

  public getMyTeam = () => {
    return this.myTeam$ ?? this.teamService.getTeamByMemberId(this.utility.loggedUser?.id).pipe(
      map((res) => {
        this.myTeam$ = of(res)
        return res
      })
    )
  }
}
