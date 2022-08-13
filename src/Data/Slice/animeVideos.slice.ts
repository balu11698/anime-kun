import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../Constants/Enum";
import { apiServiceGet } from "../ApiService/apiService";

interface IAnimeVideosState {
  details: any;
  status: string;
}

const initialState: IAnimeVideosState = {
  details: {},
  status: ""
};

export const getAnimeVideos = createAsyncThunk(
  "animeVideios/data",
  async (mal_id: string | undefined) => {
    return await apiServiceGet(`https://api.jikan.moe/v4/anime/${mal_id}/videos`);
  }
);

export const animeVideosSlice = createSlice({
  name: "animeVideos",
  initialState,
  reducers: {},
  extraReducers: {
    [getAnimeVideos.pending.type]: (state) => {
      state.status = ApiStatus.Pending;
    },
    [getAnimeVideos.fulfilled.type]: (state, action) => {
      state.status = ApiStatus.Success;
      state.details[action.meta.arg] = action.payload.data.data;
    },
    [getAnimeVideos.rejected.type]: (state) => {
      state.status = ApiStatus.Failed;
    }
  }
});

export default animeVideosSlice.reducer;
