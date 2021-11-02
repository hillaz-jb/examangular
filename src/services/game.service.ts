import { Injectable } from '@angular/core';
import {IGame} from "../models/Game";
import {HttpClient} from "@angular/common/http";
import {IAllGames} from "../models/AllGames";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private myHttpClient: HttpClient) {
  }

  public getAllGames(page: string): Observable<IAllGames> {
    return this.myHttpClient.get<IAllGames>(`https://steam-ish.test-02.drosalys.net/api/games?page=${page}`);
  }

  public getGame(id: number): Observable<IGame> {
    return this.myHttpClient.get<IGame>(`https://steam-ish.test-02.drosalys.net/api/games/${id}`);
  }

}
