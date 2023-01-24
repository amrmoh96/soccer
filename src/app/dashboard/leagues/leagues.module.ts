import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaguesRoutingModule } from './leagues-routing.module';
import { AllLeaguesComponent } from './all-leagues/all-leagues.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewLeagueComponent } from './view-league/view-league.component';


@NgModule({
  declarations: [
    AllLeaguesComponent,
    ViewLeagueComponent
  ],
  imports: [
    CommonModule,
    LeaguesRoutingModule,
    SharedModule
  ]
})
export class LeaguesModule { }
