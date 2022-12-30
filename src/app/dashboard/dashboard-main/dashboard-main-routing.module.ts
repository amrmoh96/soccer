import { DashboardMainLayoutComponent } from './dashboard-main-layout/dashboard-main-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from '../teams/players/players.component';

const routes: Routes = [
  {
    path: '', component: DashboardMainLayoutComponent, children: [
      { path: '', loadChildren: () => import('../dashboard-home/dashboard-home.module').then(M => M.DashboardHomeModule) },
      {path:'players', component:PlayersComponent},
      { path: 'teams', loadChildren: () => import('../teams/teams.module').then(M => M.TeamsModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardMainRoutingModule { }
