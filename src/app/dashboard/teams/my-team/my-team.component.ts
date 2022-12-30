import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/shared/services/http/teams.service';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { CacheService } from 'src/app/shared/services/cache.service';

@Component({
  selector: 'soc-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class MyTeamComponent implements OnInit {
  teamMembers: any[] = [];
  team: any;
  constructor(private teamService: TeamsService, private cacheService: CacheService, private MessageService: MessageService) { }

  ngOnInit(): void {
    this.cacheService.getMyTeam().subscribe(res => {
      this.team = res

      this.teamService.getTeamPlayersByTeamId(this.team.teamId).subscribe(res => {
        this.teamMembers = res;
      })
    }, err => {
      console.log(err);
      // this.MessageService.add({severity:'error', summary:`CODE ${err.error.message}`, detail:'no data found'})
    })
  }

}
