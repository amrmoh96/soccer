import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditTeamComponent } from './create-edit-team/create-edit-team.component';
import { ViewTeamComponent } from './view-team/view-team.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeamActionsRoutingModule } from './team-action-routing.module';
import { MultiSelectModule } from 'primeng/multiselect';



@NgModule({
  declarations: [
    CreateEditTeamComponent,
    ViewTeamComponent
  ],
  imports: [
    CommonModule,
    TeamActionsRoutingModule,
    SharedModule,
    MultiSelectModule
  ]
})
export class TeamActionsModule { }
