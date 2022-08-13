import { configureStore } from "@reduxjs/toolkit";
import animeCharactersSlice from "./Slice/animeCharacters.slice";
import animeDetailsSlice from "./Slice/animeDetails.slice";
import animeEpisodesSlice from "./Slice/animeEpisodes.slice";
import animeGenreSlice from "./Slice/animeGenre.slice";
import animePromosSlice from "./Slice/animePromos.slice";
import animeSearchSlice from "./Slice/animeSearch.slice";
import animeVideosSlice from "./Slice/animeVideos.slice";
import apiHandlingSlice from "./Slice/apiHandling.slice";
import languageSlice from "./Slice/language.slice";
import seasonalAnimeSlice from "./Slice/seasonalAnime";
import topAnimeSlice from "./Slice/topAnime.slice";
import topMangaSlice from "./Slice/topManga.slice";
const reducer = {
  language: languageSlice,
  apiHandling: apiHandlingSlice,
  anime: animeDetailsSlice,
  topAnime: topAnimeSlice,
  topManga: topMangaSlice,
  episodes: animeEpisodesSlice,
  animeVideos: animeVideosSlice,
  animeCharacters: animeCharactersSlice,
  animeGenres: animeGenreSlice,
  animeSearch: animeSearchSlice,
  seasonAnime: seasonalAnimeSlice,
  animePromos: animePromosSlice
};
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
  //   devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
