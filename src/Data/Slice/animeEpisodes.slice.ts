import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../Constants/Enum";
import { IAnimeEpisodes } from "../../Constants/Interface/animeEpisodes";
import { apiServiceGet } from "../ApiService/apiService";

interface IAnimeEpisodesState {
  details: IAnimeEpisodes;
  status: string;
}

const initialState: IAnimeEpisodesState = {
  details: { data: [] },
  status: "",
};

export const getAnimeEpisodes = createAsyncThunk(
  "episodes/data",
  async (mal_id: string | undefined) => {
    return await apiServiceGet(
      `https://api.jikan.moe/v4/anime/${mal_id}/episodes`
    );
  }
);

export const animeEpisodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {},
  extraReducers: {
    [getAnimeEpisodes.pending.type]: (state) => {
      state.status = ApiStatus.Pending;
    },
    [getAnimeEpisodes.fulfilled.type]: (state, { payload: { data } }: any) => {
      state.status = ApiStatus.Success;
      state.details = data;
    },
    [getAnimeEpisodes.rejected.type]: (state, { error }: any) => {
      state.status = ApiStatus.Failed;
    },
  },
});

export default animeEpisodesSlice.reducer;
