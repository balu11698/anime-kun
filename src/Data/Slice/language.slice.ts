import { createSlice } from "@reduxjs/toolkit";
import { Language } from "../../Constants/Enum";

interface ILanguage {
  name: Language;
}

const initialState: ILanguage = {
  name: Language.Japan
};
export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.name = action.payload;
    }
  }
});
export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
