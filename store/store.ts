import { configureStore } from "@reduxjs/toolkit";
import switchReducer from "slices/switchSlice";
import userReducers from "slices/DataSlice";

export const store = configureStore({
  reducer: {
    switch: switchReducer,
    loaded: switchReducer,
    sucessRef: switchReducer,
    ToggleBars: switchReducer,
    Searched: switchReducer,
    Data: userReducers,
    ComposeEmail:switchReducer,
    EmojiSwitcher:switchReducer,
    EmojiIcon:userReducers,
  },
});

export type RooteState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
