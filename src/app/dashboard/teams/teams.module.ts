import { TeamActionsModule } from './team-actions/team-actions.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { MyTeamComponent } from './my-team/my-team.component';
import { AllTeamsComponent } from './all-teams/all-teams.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlayersComponent } from './players/players.component';


@NgModule({
  declarations: [
    MyTeamComponent,
    AllTeamsComponent,
    PlayersComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    TeamActionsModule,
    SharedModule
  ]
})
export class TeamsModule { }
