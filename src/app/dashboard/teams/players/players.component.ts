import { Profile } from 'src/app/shared/models/profile.model';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/http/profile.service';
import { CacheService } from 'src/app/shared/services/cache.service';
import { Observable } from 'rxjs';
import { RequestsService } from 'src/app/shared/services/http/requests.service';
import { Request, RequestTypes } from 'src/app/shared/models/request.model';


@Component({
  selector: 'soc-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: Profile[] = []
  myTeam: any;
  constructor(private profileService: ProfileService, private cache: CacheService, private requestsService: RequestsService) { }

  ngOnInit(): void {
    this.cache.getMyTeam().subscribe(res => {
      this.myTeam = res;
    })
    this.profileService.getAllUsersProfiles().subscribe(res => {
      this.players = res
    })
  }

  public invitePlayer(id: number): void {
    const requestModel: Request = {
      requestFrom: this.myTeam.teamId,
      requestType: RequestTypes['invite'],
      requestTo: id
    }
    this.requestsService.createRequest(requestModel).subscribe(res => {
      console.log(res);
    })
  }

}
