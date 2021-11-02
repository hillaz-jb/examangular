import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAllAccounts} from "../models/AllAccounts";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  //lastPage: string = '';

  totalAccount!: number;

  constructor(private myHttpClient: HttpClient) {
  }

  public getAllAccounts(page: string): Observable<IAllAccounts> {
       return this.myHttpClient.get<IAllAccounts>(`https://steam-ish.test-02.drosalys.net/api/accounts?page=${page}`);
  }

  public getTotalAccounts(): void {
       this.getAllAccounts('1').subscribe((myData: IAllAccounts) => {

         this.totalAccount = myData["hydra:totalItems"];
         console.log(this.totalAccount);
       });
  }

  // public getAllAccounts(page: string): Observable<IAllAccounts> {
  //   return this.myHttpClient.get<IAllAccounts>(`https://steam-ish.test-02.drosalys.net${page}`);
  // }
  //
  // public getLastPage(): void {
  //   this.getAllAccounts('/api/accounts?page=1').subscribe((myData: IAllAccounts) => {
  //
  //     this.lastPage = myData["hydra:view"]["hydra:last"];
  //   });
  // }
}
