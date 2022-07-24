import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../Constants/Enum";
import { IAnimeData } from "../../Constants/Interface";
import { apiServiceGet } from "../ApiService/apiService";

interface ITopAnimeState {
  topAnimeAiring: {
    details: { data: IAnimeData[] };
    status: string;
  };
  topAnime: {
    details: { data: IAnimeData[] };
    status: string;
  };
}

const initialState: ITopAnimeState = {
  topAnimeAiring: {
    details: { data: [] },
    status: "",
  },
  topAnime: {
    details: { data: [] },
    status: "",
  },
};

export const getTopAnimeAiring = createAsyncThunk(
  "topAnime/airing",
  async () => {
    return await apiServiceGet("https://api.jikan.moe/v4/top/anime", {
      filter: "airing",
    });
  }
);

export const getTopAnime = createAsyncThunk(
  "topAnime/data",
  async (params: Record<string, string>) => {
    return await apiServiceGet("https://api.jikan.moe/v4/top/anime", params);
  }
);

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
    [getTopAnime.pending.type]: (state) => {
      state.topAnime.status = ApiStatus.Pending;
    },
    [getTopAnime.fulfilled.type]: (state, { payload: { data } }: any) => {
      state.topAnime.status = ApiStatus.Success;
      state.topAnime.details = data;
    },
    [getTopAnime.rejected.type]: (state, { error }: any) => {
      state.topAnime.status = ApiStatus.Failed;
    },
  },
});

export default topAnimeSlice.reducer;
