import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { D3SampleModule } from './d3sample.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    D3SampleModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
