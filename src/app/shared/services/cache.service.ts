import { UtilityService } from './utility.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TeamsService } from './http/teams.service';
import { RequestsService } from './http/requests.service';
import { Request } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private myTeam$!: Observable<any>;
  private notifications$!: Observable<Request[]>;
  private unreadNotificationsCount$!: Observable<number>;
  constructor(private teamService: TeamsService, private utility: UtilityService, private requests:RequestsService) { }

  public getMyTeam = () => {
    return this.myTeam$ ?? this.teamService.getTeamByMemberId(this.utility.loggedUser?.id).pipe(
      map((res) => {
        this.myTeam$ = of(res)
        return res
      })
    )
  }

  public getNotifications = () => {
    return this.notifications$ ?? this.requests.getRequestsByPlayerId(this.utility.loggedUser?.id).pipe(
      map((res) => {
        this.notifications$ = of(res)
        return res
      })
    )
  }

  public getUnreadNotificationsCount = () => {
    return this.unreadNotificationsCount$ ?? this.requests.getUnreadNotificationsCount(this.utility.loggedUser?.id).pipe(
      map((res) => {
        this.unreadNotificationsCount$ = of(res)
        return res
      })
    )
  }
}
