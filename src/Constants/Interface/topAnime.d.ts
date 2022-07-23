export interface ITopAnime {
  data: ITopAnimeData[];
}

export interface ITopAnimeData {
  mal_id: number;
  episodes: number;
  url: string;
  title: string;
  title_english: string;
  score: number;
  scored_by: number;
  images: IImages;
}
interface IImages {
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
