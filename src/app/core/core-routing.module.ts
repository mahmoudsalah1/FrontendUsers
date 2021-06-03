import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentlayoutComponent } from './components/contentlayout/contentlayout.component';
import { AboutComponent } from './components/pages/about/about.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthModule } from '../auth/auth.module';
import { PagecontentComponent } from './components/pages/pagecontent/pagecontent.component';
import { AdminguardGuard } from '../auth/guards/adminguard.guard';

const routes: Routes = [
  {path:'',component:ContentlayoutComponent,
      children:[
              {path:'' ,component : LoginComponent},
              {path:'register' ,component :RegisterComponent },
              {path:'home' ,component : HomeComponent},
              {path:'about' ,component:AboutComponent},
              {path:'pagecontent' ,component:PagecontentComponent , canActivate : [AdminguardGuard]},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
