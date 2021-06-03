import { AdminguardGuard } from './auth/guards/adminguard.guard';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren: ()=>import("./core/core.module").then(m=>m.CoreModule) },
  {path:'admin',loadChildren: ()=>import("./admin/admin.module").then(m=>m.AdminModule) },
  {path:'account',loadChildren: ()=>import("./auth/auth.module").then(m=>m.AuthModule) },
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
