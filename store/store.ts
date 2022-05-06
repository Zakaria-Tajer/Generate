import { configureStore } from "@reduxjs/toolkit";
import switchReducer from "slices/switchSlice";

export const store = configureStore({
  reducer: {
    switch: switchReducer,
    loaded: switchReducer,
    sucessRef: switchReducer
  },
});

export type RooteState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
