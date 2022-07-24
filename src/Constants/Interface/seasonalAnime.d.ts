import { IImages } from "./topAnime";

export interface ISeasonalAnimeNow {
  now: ISeasonalAnime[];
}

export interface ISeasonalAnime {
  data: ISeasonalAnimeData[];
  pagination: IPagination;
}

export interface ISeasonalAnimeData {
  title: string;
  title_english: string;
  score: number;
  scored_by: number;
  mal_id: number;
  episodes: number;
  url: string;
  images: IImages;
  type: string;
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
