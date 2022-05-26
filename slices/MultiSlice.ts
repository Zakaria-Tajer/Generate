import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MultiUsers } from "interfaces/MultiUsers";

export const initialState: MultiUsers = {
  Admins: false,
  Moderators: false,
  Developers: false,
};

export const MultiSlice = createSlice({
  name: "MultiUsers",
  initialState,
  reducers: {
    ManageMultiUsers: (state, action: PayloadAction<MultiUsers>) => {
      state.Admins = action.payload.Admins;
      state.Moderators = action.payload.Moderators;
      state.Developers = action.payload.Developers;
    },
  },
});
export const { ManageMultiUsers } = MultiSlice.actions;
export default MultiSlice.reducer;
