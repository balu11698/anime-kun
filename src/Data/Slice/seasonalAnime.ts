import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../Constants/Enum";
import { ISeasonalAnime } from "../../Constants/Interface/seasonalAnime";
import { apiServiceGet } from "../ApiService/apiService";

interface ISeasonalAnimeState {
  now: ISeasonalAnime[];
  status: string;
}

const initialState: ISeasonalAnimeState = {
  now: [],
  status: "",
};

export const getSeasonalAnimeNow = createAsyncThunk(
  "seasonAnime/now",
  async (page: number) => {
    return await apiServiceGet(
      `https://api.jikan.moe/v4/seasons/now?page=${page}`
    );
  }
);

export const seasonalAnimeSlice = createSlice({
  name: "seasonAnime",
  initialState,
  reducers: {},
  extraReducers: {
    [getSeasonalAnimeNow.pending.type]: (state) => {
      state.status = ApiStatus.Pending;
    },
    [getSeasonalAnimeNow.fulfilled.type]: (
      state,
      { payload: { data } }: any
    ) => {
      state.status = ApiStatus.Success;
      state.now[data?.pagination?.current_page] = data;
    },
    [getSeasonalAnimeNow.rejected.type]: (state, { error }: any) => {
      state.status = ApiStatus.Failed;
    },
  },
});

export default seasonalAnimeSlice.reducer;
