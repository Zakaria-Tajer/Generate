import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "interfaces/Switch";

export const initialState: Auth = {
  show: false,
  load: false,
  success: false,
  toggleBar: false,
  Search: false,
  Compose: false,
  Emojis: false,
};

export const switchSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    display: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
    loading: (state, action: PayloadAction<boolean>) => {
      state.load = action.payload;
    },
    getLoginSuccess: (state, action: PayloadAction<boolean>) => {
      state.success = action.payload;
    },
    ToggleBar: (state, action: PayloadAction<boolean>) => {
      state.toggleBar = action.payload;
    },
    Searching: (state, action: PayloadAction<boolean>) => {
      state.Search = action.payload;
    },
    Composing: (state, action: PayloadAction<boolean>) => {
      state.Compose = action.payload;
    },
    ShowEmoji: (state, action: PayloadAction<boolean>) => {
      state.Emojis = action.payload;
    },
  },
});

export const {
  display,
  loading,
  getLoginSuccess,
  ToggleBar,
  Searching,
  Composing,
  ShowEmoji,
} = switchSlice.actions;
export default switchSlice.reducer;
