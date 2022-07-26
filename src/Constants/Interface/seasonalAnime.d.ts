import { IAnimeData, IPagination } from ".";

export interface ISeasonalAnimeNow {
  now: ISeasonalAnime[];
}

export interface ISeasonalAnime {
  data: IAnimeData[];
  pagination: IPagination;
}
