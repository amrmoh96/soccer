import { map } from 'rxjs/operators';
import { UserLogin } from './../../../shared/models/auth.model';
import { UtilityService } from './../../../shared/services/utility.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LangService } from 'src/app/shared/services/lang.service';
import { RequestsService } from 'src/app/shared/services/http/requests.service';
import { Observable } from 'rxjs';
import { CacheService } from 'src/app/shared/services/cache.service';
import { Request } from 'src/app/shared/models/request.model';

@Component({
  selector: 'app-dashboard-main-layout',
  templateUrl: './dashboard-main-layout.component.html',
  styleUrls: ['./dashboard-main-layout.component.scss']
})
export class DashboardMainLayoutComponent implements OnInit {
  items: MenuItem[] = [];
  notificationsCount: number = 0;
  public notifications!: Observable<any>;


  public notifications$: Observable<any> = this.cacheService.getNotifications().pipe(
    map(res => {
      res.sort((a, b) => new Date(b.requestDate || 0).getTime() - new Date(a.requestDate || 0).getTime());
      return res;
    })
  )

  constructor(private langService: LangService, private UtilityService: UtilityService, private requests: RequestsService, public cacheService: CacheService) {
    this.cacheService.getUnreadNotificationsCount().subscribe(res => {
      this.notificationsCount = res;
    })
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Calender',
        icon: 'pi pi-calendar',
      },
      {
        label: 'Teams',
        icon: 'pi pi-users',
        items: [
          {
            label: 'My Team',
            icon: 'pi pi-user',
          },
          {
            label: 'All Teams',
            icon: 'pi pi-users',
          }
        ]
      }
    ];

  }

  translate(lang: string) {
    this.langService.translate(lang)
  }

  public get currentLang(): string {
    return this.langService.CurrentLang;
  }

  public get User(): UserLogin | null {
    return this.UtilityService.loggedUser
  }

  signOut() {
    this.UtilityService.signOut()
  }

}
