import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userData } from "interfaces/UserData";

export const initialState: userData = {
  fName: "",
  lName: "",
  img: "",
  uniqueId: "",
};

export const dataSlice = createSlice({
  name: "Userdata",
  initialState,
  reducers: {
    updateCred: (state, action: PayloadAction<userData>) => {
      state.fName = action.payload.fName;
      state.lName = action.payload.lName;
      state.img = action.payload.img;
      state.uniqueId = action.payload.uniqueId;
    },
  },
});
export const { updateCred } = dataSlice.actions;
export default dataSlice.reducer;
