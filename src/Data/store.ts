import { configureStore } from "@reduxjs/toolkit";
import animeDetailsSlice from "./Slice/animeDetails.slice";
import animeEpisodesSlice from "./Slice/animeEpisodes.slice";
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
  seasonAnime: seasonalAnimeSlice
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
