import { LeagueModel } from 'src/app/shared/models/league.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'soc-league-card',
  templateUrl: './league-card.component.html',
  styleUrls: ['./league-card.component.scss']
})
export class LeagueCardComponent {
  @Input() league?: LeagueModel;
  @Input() minified:boolean = false;
  constructor() { }
  public leagueDatePassed(league: LeagueModel): boolean {
    return new Date(league.leagueStartDate).getTime() - new Date().getTime() < 1
  }
}
