import { RequestTypes } from 'src/app/shared/models/request.model';
import { LangService } from './../services/lang.service';
import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { UtilityService } from '../services/utility.service';


@Component({
  selector: 'soc-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  @Input() notifications!: Observable<any>;
  public joinRequest: any = RequestTypes['join']
  public inviteRequest: any = RequestTypes['invite']

  constructor() { }
  ngOnInit() { }

}
