import {IAccount} from "./Account";

export interface IAllAccounts {
  'hydra:member': Array<IAccount>;
  "hydra:totalItems": number
  'hydra:view': {
    'hydra:last' : string;
  }
}
