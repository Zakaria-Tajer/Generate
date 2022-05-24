import { configureStore } from "@reduxjs/toolkit";
import switchReducer from "slices/switchSlice";
import userReducers from "slices/DataSlice";
import FilterReducers from "slices/filterSlice";

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
    Sidebar:switchReducer,
    ExpiredSession:userReducers,
    UsersFiltiring: FilterReducers
  },
});

export type RooteState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
