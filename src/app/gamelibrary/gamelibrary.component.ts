import {Component, Input, OnInit} from '@angular/core';
import {IGame} from "../../models/Game";
import {GameService} from "../../services/game.service";
import {HttpClient} from "@angular/common/http";
import {IAllGames} from "../../models/AllGames";
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-gamelibrary',
  templateUrl: './gamelibrary.component.html',
  styleUrls: ['./gamelibrary.component.scss']
})
export class GamelibraryComponent implements OnInit {

  myArrayGames: Array<IGame> | null = null;
  @Input()
  myPage: string = ''

  constructor(private myHttpClient: HttpClient, private myGamesService: GameService) {
  }

  ngOnInit(): void {
    this.myGamesService.getAllGames(this.myPage).subscribe((myData: IAllGames) => {
      console.log(myData["hydra:member"]);
      this.myArrayGames = myData["hydra:member"];
    });
  }

  formatDate(): Array<string>{
    let date: string;
    let arrayDate: Array <string> = [];
    if (this.myArrayGames != null){
      for (let game of this.myArrayGames){
        date = formatDate(game.publishedAt, 'dd-MM-YYYY', 'en')
        arrayDate.push(date);
      }
    }
    return arrayDate

  }

}
