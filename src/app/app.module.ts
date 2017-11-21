import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';

import {appRoutes} from './app.routes'

/**
 * Components
 */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WeatherComponent } from './components/weather/weather.component';


/**
 * Services
 */
import { MetaWetherService } from './services/meta-wether.service';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpModule
  ],
  providers: [
    MetaWetherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
