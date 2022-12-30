import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardMainRoutingModule } from './dashboard-main-routing.module';
import { DashboardMainLayoutComponent } from './dashboard-main-layout/dashboard-main-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { PanelMenuModule } from 'primeng/panelmenu';


@NgModule({
  declarations: [
    DashboardMainLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardMainRoutingModule,
    SharedModule,
    TieredMenuModule,
    PanelMenuModule
  ]
})
export class DashboardMainModule { }
