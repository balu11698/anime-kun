import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../Constants/Enum";
import { apiServiceGet } from "../ApiService/apiService";

interface IAnimeDetailsState {
  details: any;
  status: string;
}

const initialState: IAnimeDetailsState = {
  details: {},
  status: ""
};

export const getAnimeDetails = createAsyncThunk(
  "anime/data",
  async (mal_id: string | undefined) => {
    return await apiServiceGet(`https://api.jikan.moe/v4/anime/${mal_id}`);
  }
);

export const animeDetailsSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers: {
    [getAnimeDetails.pending.type]: (state) => {
      state.status = ApiStatus.Pending;
    },
    [getAnimeDetails.fulfilled.type]: (state, { payload: { data } }: any) => {
      state.status = ApiStatus.Success;
      state.details[data.data.mal_id] = data;
    },
    [getAnimeDetails.rejected.type]: (state) => {
      state.status = ApiStatus.Failed;
    }
  }
});

export default animeDetailsSlice.reducer;
