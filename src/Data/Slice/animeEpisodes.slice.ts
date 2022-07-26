import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../Constants/Enum";
import {
  IAnimeEpisodesData,
  IAnimeEpisodesPagination
} from "../../Constants/Interface/animeEpisodes";
import { apiServiceGet } from "../ApiService/apiService";

interface IAnimeEpisodesState {
  details: {
    [x: number | string]: {
      data: IAnimeEpisodesData[];
      pagination: IAnimeEpisodesPagination;
      status: string;
      currentPage: number;
    };
  };
}

const initialState: IAnimeEpisodesState = {
  details: {}
};

export const getAnimeEpisodes = createAsyncThunk(
  "episodes/data",
  async (params: Record<string, string | number | undefined>) => {
    return await apiServiceGet(`https://api.jikan.moe/v4/anime/${params.mal_id}/episodes`, {
      page: params.page as number
    });
  }
);

export const animeEpisodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {
    createEpisodeId: (state, { payload }) => {
      if (!Object.prototype.hasOwnProperty.call(state.details, payload.mal_id)) {
        state.details[payload.mal_id] = {
          data: [],
          pagination: { has_next_page: false, last_visible_page: 1 },
          status: "",
          currentPage: payload.page
        };
      }
    },
    updateCurrentPage: (state, { payload }) => {
      state.details[payload.mal_id].currentPage = payload.pageNumber;
    }
  },
  extraReducers: {
    [getAnimeEpisodes.pending.type]: (state, action) => {
      state.details[action.meta.arg.mal_id].status = ApiStatus.Pending;
    },
    [getAnimeEpisodes.fulfilled.type]: (state, action) => {
      state.details[action.meta.arg.mal_id].data = [
        ...state.details[action.meta.arg.mal_id].data,
        ...action.payload.data.data
      ];
      state.details[action.meta.arg.mal_id].status = ApiStatus.Success;
      state.details[action.meta.arg.mal_id].pagination = action.payload.data.pagination;
      state.details[action.meta.arg.mal_id].currentPage = action.meta.arg.page;
    },
    [getAnimeEpisodes.rejected.type]: (state, action) => {
      state.details[action.meta.arg.mal_id].status = ApiStatus.Failed;
    }
  }
});
export const { createEpisodeId, updateCurrentPage } = animeEpisodesSlice.actions;
export default animeEpisodesSlice.reducer;
