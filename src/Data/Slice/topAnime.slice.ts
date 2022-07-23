import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../Constants/Enum";
import { ITopAnime } from "../../Constants/Interface/topAnime";
import { apiServiceGet } from "../ApiService/apiService";

interface ITopAnimeState {
  topAnimeAiring: {
    details: ITopAnime;
    status: string;
  };
}

const initialState: ITopAnimeState = {
  topAnimeAiring: {
    details: { data: [] },
    status: "",
  },
};

export const getTopAnimeAiring = createAsyncThunk("topAnime/data", async () => {
  return await apiServiceGet("https://api.jikan.moe/v4/top/anime", {
    filter: "airing",
  });
});

export const topAnimeSlice = createSlice({
  name: "topAnime",
  initialState,
  reducers: {},
  extraReducers: {
    [getTopAnimeAiring.pending.type]: (state) => {
      state.topAnimeAiring.status = ApiStatus.Pending;
    },
    [getTopAnimeAiring.fulfilled.type]: (state, { payload: { data } }: any) => {
      state.topAnimeAiring.status = ApiStatus.Success;
      state.topAnimeAiring.details = data;
    },
    [getTopAnimeAiring.rejected.type]: (state, { error }: any) => {
      state.topAnimeAiring.status = ApiStatus.Failed;
    },
  },
});

export default topAnimeSlice.reducer;
