import { SocketService } from './../../../shared/services/http/socket.service';
import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/shared/services/http/requests.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-dashboard-home-main',
  templateUrl: './dashboard-home-main.component.html',
  styleUrls: ['./dashboard-home-main.component.scss']
})
export class DashboardHomeMainComponent implements OnInit {

  constructor(private socket: SocketService, private requestsService: RequestsService, private utilityService:UtilityService) { }

  ngOnInit(): void {
    console.log("hi there");
    setTimeout(() => {
      this.socket.push('event', { name: 'amr' })
      this.socket.push('event1', { name: 'amr' })
      this.socket.push('event3', { name: 'amr' })
    }, 1000);
    this.socket.listen('event').subscribe(res => {
      console.log(res);
    });

  }

}
