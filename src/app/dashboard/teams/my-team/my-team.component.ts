import { map } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/shared/services/http/teams.service';
import { CacheService } from 'src/app/shared/services/cache.service';
import { LeaguesteamsService } from 'src/app/shared/services/http/leaguesteams.service';
import { LeagueModel } from 'src/app/shared/models/league.model';
import { LeagueMatchesService } from 'src/app/shared/services/http/league-matches.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'soc-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class MyTeamComponent implements OnInit {
  teamMembers: any[] = [];
  team: any;
  public teamLeagues$: any;
  public teamUpcomingMatches$: Observable<any[]> = of();
  public playedMatches$: Observable<any[]> = of();
  constructor(private teamService: TeamsService, private cacheService: CacheService, private MessageService: MessageService, private teamLeagues: LeaguesteamsService, private leagueMatches: LeagueMatchesService) { }

  ngOnInit(): void {
    this.cacheService.getMyTeam().subscribe(res => {
      this.team = res
      this.teamLeagues$ = this.teamLeagues.getAllRegisteredTeamsToLeagueByTeamId(this.team?.id);
      this.teamUpcomingMatches$ = this.leagueMatches.getLeagueMatchesByTeamId(this.team?.id).pipe(
        map((res: any) => {
          return res.filter((M: any) => new Date(M.matchDate).getTime() > new Date().getTime())
        })
      )
      this.playedMatches$ = this.leagueMatches.getLeagueMatchesByTeamId(this.team?.id).pipe(
        map((res: any) => {
          return res.filter((M: any) => new Date(M.matchDate).getTime() < new Date().getTime())
        })
      )
      this.teamService.getTeamPlayersByTeamId(this.team.teamId).subscribe(res => {
        this.teamMembers = res;
      })
    }, err => {
      console.log(err);
      // this.MessageService.add({severity:'error', summary:`CODE ${err.error.message}`, detail:'no data found'})
    })
  }

  public leagueDatePassed(league: LeagueModel): boolean {
    return new Date(league.leagueStartDate).getTime() - new Date().getTime() < 1
  }

}
