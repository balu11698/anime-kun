import { IImages } from ".";

export interface IAnimeCharacters {
  character: {
    mal_id: number;
    images: IImages;
    name: string;
    url: string;
  };
  favorites: string;
  role: string;
  voice_actors: IAnimeCharactersVoice[];
}

export interface IAnimeCharactersVoice {
  language: string;
  person: {
    mal_id: number;
    images: IImages;
    name: string;
    url: string;
  };
}
