import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./landing/landing.module').then(M => M.LandingModule) },
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(M => M.AuthenticationModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(M => M.DashboardModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
