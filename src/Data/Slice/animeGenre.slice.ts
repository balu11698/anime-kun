import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../Constants/Enum";
import { apiServiceGet } from "../ApiService/apiService";

interface IAnimeGenresState {
  details: any;
  status: string;
}

const initialState: IAnimeGenresState = {
  details: [],
  status: ""
};

export const getAnimeGenres = createAsyncThunk("animeGenre/data", async () => {
  return await apiServiceGet("https://api.jikan.moe/v4/genres/anime", { filter: "genres" });
});

export const animeGenresSlice = createSlice({
  name: "animeGenre",
  initialState,
  reducers: {},
  extraReducers: {
    [getAnimeGenres.pending.type]: (state) => {
      state.status = ApiStatus.Pending;
    },
    [getAnimeGenres.fulfilled.type]: (state, { payload: { data } }) => {
      state.status = ApiStatus.Success;
      state.details = data.data;
    },
    [getAnimeGenres.rejected.type]: (state) => {
      state.status = ApiStatus.Failed;
    }
  }
});

export default animeGenresSlice.reducer;
