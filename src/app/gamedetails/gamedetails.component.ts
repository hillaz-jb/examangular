import { Component, OnInit } from '@angular/core';
import {IAllGames} from "../../models/AllGames";
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../../services/game.service";
import {IGame} from "../../models/Game";

@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.component.html',
  styleUrls: ['./gamedetails.component.scss']
})
export class GamedetailsComponent implements OnInit {

  myID: number = 0;
  myGame: IGame | null = null;

  constructor(private myGamesService: GameService, private myActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.myActivatedRoute.params.subscribe(param => {this.myID = param.id;
    });

    this.myGamesService.getGame(this.myID).subscribe((myData: IGame) => {
      this.myGame = myData;
    });
  }

}
