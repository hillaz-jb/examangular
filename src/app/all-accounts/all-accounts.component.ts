import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AccountsService} from "../../services/accounts.service";
import {IGame} from "../../models/Game";
import {IAccount} from "../../models/Account";
import {IAllGames} from "../../models/AllGames";
import {IAllAccounts} from "../../models/AllAccounts";

@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.scss']
})
export class AllAccountsComponent implements OnInit {

  myArrayAccount: Array<IAccount> = [];
  myPage: string = '';
  myTotalAccount: number = 0;
  totalPage!: number;
  myArrayPage: Array<string> = [];
  constructor(private myHttpClient: HttpClient, private myAccountService: AccountsService) { }

  ngOnInit(): void {
    this.myAccountService.getAllAccounts('1').subscribe((myData: IAllAccounts) => {

      this.myTotalAccount = myData["hydra:totalItems"];
      console.log(this.myTotalAccount);

      this.totalPage = Math.round(this.myTotalAccount / 30);
      console.log(this.totalPage);

      this.myArrayAccount = myData["hydra:member"];
    });

    // for(let i = 1; i <= this.totalPage; i++){
    //   this.myPage = i.toString();
    //   this.myAccountService.getAllAccounts(this.myPage).subscribe((myData: IAllAccounts) => {
    //     console.log(myData["hydra:member"]);
    //     for (let i = 0; i < 31; i++){
    //       this.myArrayAccount.push(myData["hydra:member"][i]);
    //     }
    //     console.log(this.myArrayAccount);
    //   });
    // }



    // while(this.myPage != this.myAccountService.lastPage){
    //   let n: number = 1;
    //   this.myPage = '/api/accounts?page='+n;
    //   n = n+1;
    //   this.myAccountService.getAllAccounts(this.myPage).subscribe((myData: IAllAccounts) => {
    //     console.log(myData["hydra:member"]);
    //     for (let i = 0; i < 31; i++){
    //       this.myArrayAccount.push(myData["hydra:member"][i]);
    //     }
    //
    //     console.log(this.myArrayAccount);
    //   });
    // }


  }

}
