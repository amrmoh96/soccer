import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TabViewModule } from 'primeng/tabview';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import {TableModule} from 'primeng/table';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { CalculateAgePipe } from './pipes/calculate-age.pipe';
import {BadgeModule} from 'primeng/badge';
import { NavigationsListComponent } from './components/navigations-list/navigations-list.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    PlayerCardComponent,
    PageLayoutComponent,
    PageTitleComponent,
    CalculateAgePipe,
    NavigationsListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    OverlayPanelModule,
    TabViewModule,
    SelectButtonModule,
    CalendarModule,
    InputTextareaModule,
    TableModule,
    BadgeModule,
    RouterModule
  ], exports: [
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    OverlayPanelModule,
    TabViewModule,
    TranslateModule,
    SelectButtonModule,
    CalendarModule,
    InputTextareaModule,
    PlayerCardComponent,
    PageLayoutComponent,
    TableModule,
    PageTitleComponent,
    CalculateAgePipe,
    BadgeModule,
    NavigationsListComponent
  ]
})
export class SharedModule { }
