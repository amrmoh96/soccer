import { LeagueMatchesService } from './../../../shared/services/http/league-matches.service';
import { LeagueModel } from 'src/app/shared/models/league.model';
import { LeaguesteamsService } from './../../../shared/services/http/leaguesteams.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { LeagueService } from 'src/app/shared/services/http/league.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'soc-view-league',
  templateUrl: './view-league.component.html',
  styleUrls: ['./view-league.component.scss']
})
export class ViewLeagueComponent {
  public league?: LeagueModel;
  public leagueTeams?: Observable<any>;
  public leagueMatches?: Observable<any>;
  constructor(private activatedRoute: ActivatedRoute, private leaguesTeams: LeaguesteamsService, private leagueService: LeagueService, private leagueMatchesService: LeagueMatchesService) {
    this.activatedRoute.params.subscribe(res => {
      this.leagueService.getLeagueById(res['id']).subscribe(league => {
        this.league = league
        this.leagueTeams = this.leaguesTeams.getLeagueRegisterTeams(league.leagueId);
        this.leagueMatches = this.leagueMatchesService.getLeagueMatchesByLeagueId(league.leagueId)
      })
    })
  }

  public isLeaguedDatePast(): boolean {
    if (new Date(this.league?.leagueStartDate || 0).getTime() > new Date().getTime()) return false;
    return true
  }
}
