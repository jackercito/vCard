import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewVCardComponent } from './vCardApp/components/view-v-card/view-v-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { NgxVcardModule } from "ngx-vcard";

@NgModule({
  declarations: [
    AppComponent,
    ViewVCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    NgxVcardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
