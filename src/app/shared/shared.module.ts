import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,

  ]
})
export class SharedModule { }
