import { Component, Input } from '@angular/core';

const enum matchResults {
  homeTeamWin = 0,
  awayTeamWin = 1,
  draw = 2,
  notPlayed = 3
}

@Component({
  selector: 'soc-match-card',
  templateUrl: './match-acrd.component.html',
  styleUrls: ['./match-acrd.component.scss']
})
export class MatchAcrdComponent {
  @Input() match: any;
  @Input() matchPlayed: boolean = false;


  constructor() { }

  public getMatchResult(): matchResults {
    let homeTeamScore = 0;
    let awayTeamScore = 0;
    if (!this.matchPlayed) return matchResults['notPlayed'];
    homeTeamScore = this.match.homeTeamGoals + (this.match.penalities ? this.match?.homeTeamPenalites : 0)
    awayTeamScore = this.match.awayTeamGoals + (this.match.penalities ? this.match?.awayTeamPenalites : 0)
    if(homeTeamScore == awayTeamScore) return matchResults['draw'];
    if(homeTeamScore > awayTeamScore) return matchResults['homeTeamWin'];
    if(homeTeamScore < awayTeamScore) return matchResults['awayTeamWin'];
    return matchResults['draw']
  }
}
