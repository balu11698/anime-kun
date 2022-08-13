import { IAnimeTrailer } from ".";

interface IAnimeVideos {
  promo: IAnimeVideosPromo[];
}
interface IAnimeVideosPromo {
  title: string;
  trailer: IAnimeTrailer;
}
