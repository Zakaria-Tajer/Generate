import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UsersFiltring } from "interfaces/Switch";

export const initialState: UsersFiltring = {
  Client: false,
  Moderator: false,
  Developer: false,
  CloseFilter: false,
  Notifications: false,
  AddUser: false
};

export const filterSlice = createSlice({
  name: "UsersFilters",
  initialState,
  reducers: {
    Filtring: (state, action: PayloadAction<UsersFiltring>) => {
      state.Client = action.payload.Client;
      state.Moderator = action.payload.Moderator;
      state.Developer = action.payload.Developer;
      state.CloseFilter = action.payload.CloseFilter;
    },

    showNotifications: (state, action: PayloadAction<UsersFiltring>) => {
      state.Notifications = action.payload.Notifications;
    },
    
    AddUsers: (state, action: PayloadAction<UsersFiltring>) => {
      state.AddUser = action.payload.AddUser;
    },

  },
});

export const { Filtring, showNotifications,AddUsers } = filterSlice.actions;
export default filterSlice.reducer;
