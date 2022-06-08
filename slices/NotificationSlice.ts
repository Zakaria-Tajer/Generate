import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Datas, notes } from "interfaces/User";

export const initialState: Datas = {
  ClientData: [],
};

export const NotificationSlice = createSlice({
  name: "MultiUsers",
  initialState,
  reducers: {
    NotificationsDataHandler: (
      state = initialState,
      action: PayloadAction<Datas>
    ) => {
      let array: notes[] = [];
      array.push(...state.ClientData, ...action.payload.ClientData);
    },
    
  },
});
export const { NotificationsDataHandler } = NotificationSlice.actions;
export default NotificationSlice.reducer;
