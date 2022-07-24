import { IAnimeData } from ".";

export interface ISeasonalAnimeNow {
  now: ISeasonalAnime[];
}

export interface ISeasonalAnime {
  data: IAnimeData[];
  pagination: IPagination;
}

export interface IPagination {
  current_page: number;
  has_next_page: boolean;
  last_visible_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}
