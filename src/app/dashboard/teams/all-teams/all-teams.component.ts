import { UtilityService } from 'src/app/shared/services/utility.service';
import { CacheService } from 'src/app/shared/services/cache.service';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/models/Team.model';
import { TeamsService } from 'src/app/shared/services/http/teams.service';
import { Request, RequestTypes } from 'src/app/shared/models/request.model';
import { RequestsService } from 'src/app/shared/services/http/requests.service';

@Component({
  selector: 'soc-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.scss']
})
export class AllTeamsComponent implements OnInit {
  teams: Team[] = [];
  canJoinTeams:boolean = true;
  constructor(private TeamService: TeamsService, private CacheService:CacheService, private UtilityService:UtilityService, private requestsService:RequestsService) { }

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

  public joinTeam(teamId: number, teamCaptin:number): void {
    const requestModel: Request = {
      requestFrom: this.UtilityService.loggedUser?.id || 0,
      requestType: RequestTypes['join'],
      requestTo: teamCaptin,
      teamId:teamId,
    }
    this.requestsService.createRequest(requestModel).subscribe(res => {
      console.log(res);
    })
  }

}
