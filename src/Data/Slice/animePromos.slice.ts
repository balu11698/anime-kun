import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../Constants/Enum";
import { apiServiceGet } from "../ApiService/apiService";

interface IAnimePromosState {
  details: any;
  pagination: any;
  status: string;
}

const initialState: IAnimePromosState = {
  details: [],
  pagination: {},
  status: ""
};

export const getRecentPromos = createAsyncThunk("animePromos/recent", async () => {
  return await apiServiceGet("https://api.jikan.moe/v4/watch/promos");
});

export const animePromosSlice = createSlice({
  name: "animePromos",
  initialState,
  reducers: {},
  extraReducers: {
    [getRecentPromos.pending.type]: (state) => {
      state.status = ApiStatus.Pending;
    },
    [getRecentPromos.fulfilled.type]: (state, { payload: { data } }) => {
      state.status = ApiStatus.Success;
      state.details = data.data;
      state.pagination = data.pagination;
    },
    [getRecentPromos.rejected.type]: (state) => {
      state.status = ApiStatus.Failed;
    }
  }
});

export default animePromosSlice.reducer;
