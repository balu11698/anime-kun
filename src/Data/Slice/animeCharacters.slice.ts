import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../Constants/Enum";
import { apiServiceGet } from "../ApiService/apiService";

interface IAnimeCharactersState {
  details: any;
  status: string;
}

const initialState: IAnimeCharactersState = {
  details: {},
  status: ""
};

export const getAnimeCharacters = createAsyncThunk(
  "animeCharacters/data",
  async (mal_id: string | undefined) => {
    return await apiServiceGet(`https://api.jikan.moe/v4/anime/${mal_id}/characters`);
  }
);

export const animeCharactersSlice = createSlice({
  name: "animeCharacters",
  initialState,
  reducers: {},
  extraReducers: {
    [getAnimeCharacters.pending.type]: (state) => {
      state.status = ApiStatus.Pending;
    },
    [getAnimeCharacters.fulfilled.type]: (state, action) => {
      state.status = ApiStatus.Success;
      state.details[action.meta.arg] = action.payload.data.data;
    },
    [getAnimeCharacters.rejected.type]: (state) => {
      state.status = ApiStatus.Failed;
    }
  }
});

export default animeCharactersSlice.reducer;
