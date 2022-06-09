import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MsgAllData, MessagesData } from "interfaces/Chat";

export const initialState: MsgAllData = {
  ChatModClientData: [],
};

export const ModChat = createSlice({
  name: "Chat",
  initialState,
  reducers: {
    ModCliChatData: (state = initialState, action: PayloadAction<MsgAllData>) => {
      let array = [];
      array.push(...state.ChatModClientData,...action.payload.ChatModClientData);
    },
  },
});
export const { ModCliChatData } = ModChat.actions;
export default ModChat.reducer;
