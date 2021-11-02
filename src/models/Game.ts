export interface IGame {
  '@id': string,
  '@type': string,
  id: number,
  name: string,
  publishedAt: Date,
  price: number,
  genres: Array<string>,
  languages: Array<string>,
  thumbnailCover: string,
  thumbnailLogo: string
}
