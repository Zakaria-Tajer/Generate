import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Datas } from "interfaces/User";

export const initialState: Datas = {
  ClientData: [],
};

export const NotificationSlice = createSlice({
  name: "MultiUsers",
  initialState,
  reducers: {
    NotificationsDataHandler: (state, action: PayloadAction<Datas>) => {
      let array: Datas[] = [];
      array.push(...state.ClientData, ...action.payload.ClientData);
    },
  },
});
export const { NotificationsDataHandler } = NotificationSlice.actions;
export default NotificationSlice.reducer;
