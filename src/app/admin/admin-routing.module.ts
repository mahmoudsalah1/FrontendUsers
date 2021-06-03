import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminguardGuard } from '../auth/guards/adminguard.guard';

const routes: Routes = [
  {path:'',component:DashboardComponent , canActivate:[AdminguardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
