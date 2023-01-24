import { Team } from './../../../shared/models/Team.model';
import { map } from 'rxjs/operators';
import { LeagueService } from './../../../shared/services/http/league.service';
import { Component } from '@angular/core';
import { LeagueModel } from 'src/app/shared/models/league.model';
import { Observable } from 'rxjs';
import { CacheService } from 'src/app/shared/services/cache.service';
import { LeaguesteamsService } from 'src/app/shared/services/http/leaguesteams.service';

@Component({
  selector: 'soc-all-leagues',
  templateUrl: './all-leagues.component.html',
  styleUrls: ['./all-leagues.component.scss']
})
export class AllLeaguesComponent {
  public myTeam: Team | undefined;
  public myTeamRegiteredLeagues: any;

  public leagues$: Observable<LeagueModel[]> = this.leagueService.getAllLeagues().pipe(
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

  public isTeamCaptin$: Observable<Team | undefined> = this.cacheService.getMyTeam().pipe(
    map((res: Team) => {
      return res
    })
  );

  constructor(private leagueService: LeagueService, private cacheService: CacheService, private LeaguesteamsService: LeaguesteamsService) {
    this.isTeamCaptin$.subscribe((res: Team | undefined) => {
      this.myTeam = res
      if (this.myTeam && this.myTeam.id) {
        this.LeaguesteamsService.getAllRegisteredTeamsToLeagueByTeamId(this.myTeam?.id).subscribe(res => {
          this.myTeamRegiteredLeagues = res
        })
      }
    })
  }

  public leagueDatePassed(league: LeagueModel): boolean {
    return new Date(league.leagueStartDate).getTime() - new Date().getTime() < 1
  }

  public canJoinLeague(league: LeagueModel): boolean | undefined {
    return this.myTeam?.isCaptin &&
      !this.leagueDatePassed(league) &&
      !this.myTeamRegiteredLeagues?.map((M: any) => M.leagueId).includes(league.leagueId)
  }
  joinLeague(league: LeagueModel) {
    const leagueTeam = {
      registeredTeamId: this.myTeam?.id,
      registerToLeagueId: league.leagueId
    }
    this.LeaguesteamsService.registerTeamToLeague(leagueTeam).subscribe(res => {
      this.myTeamRegiteredLeagues.push(league)
    })
  }
}
