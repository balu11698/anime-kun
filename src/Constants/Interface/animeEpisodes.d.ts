export interface IAnimeEpisodes {
  data: IAnimeEpisodesData[];
}

export interface IAnimeEpisodesData {
  mal_id: number;
  score: number;
  title: string;
  title_romanji: string;
  filler: boolean;
}
