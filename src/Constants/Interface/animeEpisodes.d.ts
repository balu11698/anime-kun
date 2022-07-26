export interface IAnimeEpisodes {
  details: { data: IAnimeEpisodesData[]; pagination: IAnimeEpisodesPagination };
  status: string;
}

export interface IAnimeEpisodesData {
  mal_id: number;
  score: number;
  title: string;
  title_romanji: string;
  filler: boolean;
}

export interface IAnimeEpisodesPagination {
  has_next_page: boolean;
  last_visible_page: number;
}
