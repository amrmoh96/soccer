import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTeamsComponent } from './all-teams/all-teams.component';
import { MyTeamComponent } from './my-team/my-team.component';

const routes: Routes = [
  {
    path: '', component: AllTeamsComponent
  },
  {
    path: 'myteam', component: MyTeamComponent
  },
  {
    path: 'action', loadChildren: () => import('./team-actions/team-actions.module').then(TM => TM.TeamActionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
