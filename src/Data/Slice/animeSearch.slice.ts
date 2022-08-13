import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../Constants/Enum";
import { apiServiceGet } from "../ApiService/apiService";

interface IAnimeSearchsState {
  details: any;
  pagination: any;
  status: string;
}

const initialState: IAnimeSearchsState = {
  details: [],
  pagination: {},
  status: ""
};

export const getAnimeGenreSearch = createAsyncThunk(
  "animeCharacters/data",
  async (payload: Record<string, string | number>) => {
    return await apiServiceGet("https://api.jikan.moe/v4/anime", {
      genres: payload.genre,
      page: payload.page
    });
  }
);

export const animeSearchSlice = createSlice({
  name: "animeSearch",
  initialState,
  reducers: {},
  extraReducers: {
    [getAnimeGenreSearch.pending.type]: (state) => {
      state.status = ApiStatus.Pending;
    },
    [getAnimeGenreSearch.fulfilled.type]: (state, { payload: { data } }) => {
      state.status = ApiStatus.Success;
      state.details = data.data;
      state.pagination = data.pagination;
    },
    [getAnimeGenreSearch.rejected.type]: (state) => {
      state.status = ApiStatus.Failed;
    }
  }
});

export default animeSearchSlice.reducer;
