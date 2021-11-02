import {IGame} from "./Game";

export interface IAllGames {
  'hydra:member': Array<IGame>;
  'hydra:view': {
    'hydra:last' : string;
  }
}
