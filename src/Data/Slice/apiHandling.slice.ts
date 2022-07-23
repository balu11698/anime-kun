import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { ApiStatus } from "../../Constants/Enum";

interface IApiHandling {
  status: string;
}

const initialState: IApiHandling = {
  status: "",
};

const apiHandlingSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(isPending, (state, action) => {
      state.status = ApiStatus.Pending;
    });
    builder.addMatcher(isFulfilled, (state, action) => {
      state.status = ApiStatus.Success;
    });
    builder.addMatcher(isRejected, (state, action) => {
      state.status = ApiStatus.Failed;
    });
  },
});

export default apiHandlingSlice.reducer;
