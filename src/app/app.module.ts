import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [ AppComponent, routingComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
