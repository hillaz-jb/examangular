import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { GamelibraryComponent } from './gamelibrary/gamelibrary.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GamedetailsComponent } from './gamedetails/gamedetails.component';
import { HomeComponent } from './home/home.component';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    GamelibraryComponent,
    NavbarComponent,
    GamedetailsComponent,
    HomeComponent,
    AllAccountsComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
