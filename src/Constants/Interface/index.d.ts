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
