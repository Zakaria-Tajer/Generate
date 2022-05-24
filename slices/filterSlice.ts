import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UsersFiltring } from "interfaces/Switch";

export const initialState: UsersFiltring = {
  Client: false,
  Moderator: false,
  Developer: false,
  CloseFilter: false
};

export const filterSlice = createSlice({
  name: "UsersFilters",
  initialState,
  reducers: {
    Filtring: (state, action: PayloadAction<UsersFiltring>) => {
        state.Client = action.payload.Client
        state.Moderator = action.payload.Moderator
        state.Developer = action.payload.Developer
        state.CloseFilter = action.payload.CloseFilter
    },
  },
});

export const { Filtring } = filterSlice.actions;
export default filterSlice.reducer;
