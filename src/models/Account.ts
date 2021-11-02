export interface IAccount {
  '@id': string,
  '@type': string,
  id: number,
  name: string,
  email: string,
  nickname: string,
  libraries: Array<string>,
  wallet: number,
}
