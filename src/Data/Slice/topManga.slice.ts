import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../Constants/Enum";
import { apiServiceGet } from "../ApiService/apiService";

interface ITopMangaState {
  topManga: {
    details: any;
    status: string;
  };
}

const initialState: ITopMangaState = {
  topManga: {
    details: {
      start: {},
      manga: {},
      novel: {},
      lightnovel: {},
      oneshot: {},
      doujin: {},
      manhwa: {},
      manhua: {}
    },
    status: ""
  }
};

export const getTopManga = createAsyncThunk(
  "topManga/data",
  async (params: Record<string, string | number>) => {
    return await apiServiceGet("https://api.jikan.moe/v4/top/manga", params);
  }
);

export const topMangaSlice = createSlice({
  name: "topAnime",
  initialState,
  reducers: {},
  extraReducers: {
    [getTopManga.pending.type]: (state) => {
      state.topManga.status = ApiStatus.Pending;
    },
    [getTopManga.fulfilled.type]: (state, { payload }) => {
      state.topManga.status = ApiStatus.Success;
      state.topManga.details.pagination = payload.data.pagination;
      state.topManga.details[payload.config.params.type][payload.data.pagination.current_page] =
        payload.data.data;
    },
    [getTopManga.rejected.type]: (state) => {
      state.topManga.status = ApiStatus.Failed;
    }
  }
});

export default topMangaSlice.reducer;
