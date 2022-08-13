export interface IAnimeData {
  title: string;
  title_english: string;
  score: number;
  scored_by: number;
  mal_id: number;
  episodes: number;
  url: string;
  images: IImages;
  type: string;
  rank: number;
  synopsis: string;
  rating: string;
  genres: IAnimeGenres[];
  year: number;
  season: string;
  status: string;
  source: string;
  trailer: IAnimeTrailer;
  theme: {
    openings: [];
    endings: [];
  };
}
export interface IImages {
  jpg: {
    image_url: string;
    large_image_url: string;
    small_image_url: string;
  };
  webp: {
    image_url: string;
    large_image_url: string;
    small_image_url: string;
  };
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

export interface IAnimeGenres {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}

export interface IAnimeTrailer {
  embed_url: string;
  url: string;
  youtube_id: string;
  images: {
    image_url: string;
    large_image_url: string;
    maximum_image_url: string;
    medium_image_url: string;
    small_image_url: string;
  };
}
