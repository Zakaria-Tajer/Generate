import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatNotes, Chat_Users } from "interfaces/Chat";

export const initialState: ChatNotes = {
  Chat_Data_Users: [],
};

export const dataSlice = createSlice({
  name: "Chat",
  initialState,
  reducers: {
    ChatData: (state = initialState, action: PayloadAction<ChatNotes>) => {
      let array: Chat_Users[] = [];
      array.push(
        ...(state.Chat_Data_Users !== undefined ? state.Chat_Data_Users : []),
        ...(action.payload.Chat_Data_Users !== undefined
          ? action.payload.Chat_Data_Users
          : [])
      );
    },
  },
});
export const { ChatData } = dataSlice.actions;
export default dataSlice.reducer;
