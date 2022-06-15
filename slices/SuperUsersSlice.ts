import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SuperUsersData } from "interfaces/SuperUsers";

export const initialState: SuperUsersData = {
  FirstName: "",
  LastName: "",
  img: "",
  id: "",
  ImageAdmin: ''
  
};

export const SuperUsersSlice = createSlice({
  name: "MultiUsers",
  initialState,
  reducers: {
    getSuperUsersInfo: (state, action: PayloadAction<SuperUsersData>) => {
      state.FirstName = action.payload.FirstName;
      state.LastName = action.payload.LastName;
      state.img = action.payload.img;
      state.id = action.payload.id;
    },
    updateImageAdmin: (state, action: PayloadAction<SuperUsersData>) => {
      state.ImageAdmin = action.payload.ImageAdmin
      state.FirstName = action.payload.FirstName
      state.LastName = action.payload.LastName
    },
  },
});
export const { getSuperUsersInfo,updateImageAdmin } = SuperUsersSlice.actions;
export default SuperUsersSlice.reducer;
