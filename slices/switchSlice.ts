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
  showBar: false,
  DispalyChat: false
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
    showSidebar: (state, action: PayloadAction<boolean>) => {
      state.showBar = action.payload;
    },
    getChat: (state, action: PayloadAction<boolean>) => {
      state.DispalyChat = action.payload;
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
  showSidebar,
  getChat
} = switchSlice.actions;
export default switchSlice.reducer;
