import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardHomeRoutingModule } from './dashboard-home-routing.module';
import { DashboardHomeMainComponent } from './dashboard-home-main/dashboard-home-main.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DashboardHomeMainComponent
  ],
  imports: [
    CommonModule,
    DashboardHomeRoutingModule,
    SharedModule
  ]
})
export class DashboardHomeModule { }
