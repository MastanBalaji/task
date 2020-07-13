import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ViewComponent } from './view/view.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileComponent } from './profile.component';
import { profileRoutingModule } from './profile-routing.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    ProfileComponent,
    ViewComponent,
    ProfilesComponent
  ],
  imports: [
    CommonModule,
    profileRoutingModule,
  ],
})
export class profileModule { }
