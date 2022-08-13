import { IAnimeTrailer, IImages } from ".";

export interface IAnimePromo {
  entry: {
    images: IImages;
    mal_id: number;
    title: string;
    url: string;
  };
  title: string;
  trailer: IAnimeTrailer;
}
