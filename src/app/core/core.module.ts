import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ContentlayoutComponent } from './components/contentlayout/contentlayout.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagecontentComponent } from './components/pages/pagecontent/pagecontent.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentlayoutComponent,
    LoginComponent,
    RegisterComponent,
    PagecontentComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
