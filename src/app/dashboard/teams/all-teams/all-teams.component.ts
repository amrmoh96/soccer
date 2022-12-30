import { CacheService } from 'src/app/shared/services/cache.service';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/models/Team.model';
import { TeamsService } from 'src/app/shared/services/http/teams.service';

@Component({
  selector: 'soc-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.scss']
})
export class AllTeamsComponent implements OnInit {
  teams: Team[] = [];
  canJoinTeams:boolean = true;
  constructor(private TeamService: TeamsService, private CacheService:CacheService) { }

  ngOnInit(): void {
    this.TeamService.getAllTeams().subscribe(res => {
      this.teams = res;
      this.teams.forEach(T => T.rate = Math.floor(Math.random() * 5) + 1)
    })
    this.CacheService.getMyTeam().subscribe(res => {
      if(res) this.canJoinTeams = false;
    }, err => {

    })
  }

  public starCounter(stars: number): Array<number> {
    return new Array(stars)
  }

}
