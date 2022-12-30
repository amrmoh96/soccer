import { UserLogin } from './../../../shared/models/auth.model';
import { UtilityService } from './../../../shared/services/utility.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LangService } from 'src/app/shared/services/lang.service';

@Component({
  selector: 'app-dashboard-main-layout',
  templateUrl: './dashboard-main-layout.component.html',
  styleUrls: ['./dashboard-main-layout.component.scss']
})
export class DashboardMainLayoutComponent implements OnInit {
  items: MenuItem[] = [];
  notificationsCount:number = 9;

  constructor(private langService: LangService, private UtilityService: UtilityService) { }

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

}
