import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamelibraryComponent} from "./gamelibrary/gamelibrary.component";
import {GamedetailsComponent} from "./gamedetails/gamedetails.component";
import {HomeComponent} from "./home/home.component";
import {AllAccountsComponent} from "./all-accounts/all-accounts.component";
import {CreateAccountComponent} from "./create-account/create-account.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game/:id', component: GamedetailsComponent},
  { path: 'accounts', component: AllAccountsComponent},
  { path: 'create_account', component: CreateAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
