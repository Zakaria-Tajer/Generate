import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dev } from "interfaces/SuperUsers";

export const initialState: Dev = {
  id: "",
  img: "",
  projectName: "",
  projectId: "",
};

export const DeveloperSlice = createSlice({
  name: "UsersFilters",
  initialState,
  reducers: {
    getDevId: (state, action: PayloadAction<Dev>) => {
      state.id = action.payload.id;
      state.img = action.payload.img;
      state.projectName = action.payload.projectName;
      state.projectId = action.payload.projectId;
    },
  },
});

export const { getDevId } = DeveloperSlice.actions;
export default DeveloperSlice.reducer;
