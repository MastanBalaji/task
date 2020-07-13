import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GooglemapComponent } from './components/googlemap/googlemap.component';
import {CommonserviceService} from './service/commonservice.service'
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AgmCoreModule} from '@agm/core'
@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDvkx8UMPLOI1th3JOeWkvg9jUULUlQOLI'
    })
    
  ],
  providers: [CommonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
