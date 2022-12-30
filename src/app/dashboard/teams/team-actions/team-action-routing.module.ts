import { ViewTeamComponent } from './view-team/view-team.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditTeamComponent } from './create-edit-team/create-edit-team.component';

const routes: Routes = [
  {
    path: 'create', component: CreateEditTeamComponent
  },
  {
    path: 'edit/:id', component: CreateEditTeamComponent
  },
  {
    path: 'view/:id', component: ViewTeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamActionsRoutingModule { }
