import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './modules/material/material.module';
import { NavbarMainComponent } from './components/navbar-main/navbar-main.component';
import { MissionComponent } from './components/mission/mission.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarMainComponent,
    MissionComponent,
    NavTabsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
