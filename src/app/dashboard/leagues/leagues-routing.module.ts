import { ViewLeagueComponent } from './view-league/view-league.component';
import { AllLeaguesComponent } from './all-leagues/all-leagues.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AllLeaguesComponent },
  { path: ':id', component: ViewLeagueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaguesRoutingModule { }
