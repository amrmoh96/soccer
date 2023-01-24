import { UtilityService } from 'src/app/shared/services/utility.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from 'src/app/shared/services/http/teams.service';
import { CacheService } from 'src/app/shared/services/cache.service';

@Component({
  selector: 'soc-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.scss']
})
export class ViewTeamComponent implements OnInit {
  teamMembers: any[] = [];
  team: any
  public canJoin: boolean = false;
  constructor(private TeamService: TeamsService, private activatedRoute: ActivatedRoute, public cacheService: CacheService) {
    this.activatedRoute.params.subscribe(P => {
      if (P.id) {
        this.TeamService.getTeamById(P.id).subscribe(res => {
          this.team = res;
          this.TeamService.getTeamPlayersByTeamId(this.team.teamId).subscribe(players => {
            this.teamMembers = players
          })
        })
      }
    })
  }

  ngOnInit(): void {
    this.cacheService.getMyTeam().subscribe(res => {
      if (res) return;
      this.canJoin = true
    }, err => {
      this.canJoin = true
    })
  }

}
