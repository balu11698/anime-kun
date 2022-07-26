import { createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { ApiStatus } from "../../Constants/Enum";

interface IApiHandling {
  status: string;
  counter: number;
}

const initialState: IApiHandling = {
  status: "",
  counter: 0
};

const pendingState = (state: WritableDraft<IApiHandling>) => {
  state.status = ApiStatus.Pending;
  state.counter = state.counter + 1;
};

const fulfilledState = (state: WritableDraft<IApiHandling>) => {
  state.counter = state.counter - 1;
  if (state.counter === 0) {
    state.status = ApiStatus.Success;
  }
};

const apiHandlingSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(isPending, (state) => pendingState(state));
    builder.addMatcher(isFulfilled, (state) => fulfilledState(state));
    builder.addMatcher(isRejected, (state) => {
      state.status = ApiStatus.Failed;
    });
  }
});

export default apiHandlingSlice.reducer;
