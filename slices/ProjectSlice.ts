// ProjectSlice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth, NotificationModerator } from "interfaces/User";

export const initialState: NotificationModerator = {
  isOpened: false,
  nextItems: false,
  TnxComp: false,
  projectDesc: "",
  projectName: "",
  deliverType: "",
  Notifiy: false,
  CLientFirstName: "",
  CLientLastName: "",
  CLientImage: "",
  CLientId: "",
};

export const ProjectSlice = createSlice({
  name: "MultiUsers",
  initialState,
  reducers: {
    projectCreator: (state, action: PayloadAction<NotificationModerator>) => {
      state.isOpened = action.payload.isOpened;
    },
    NavigateNextItems: (
      state,
      action: PayloadAction<NotificationModerator>
    ) => {
      state.nextItems = action.payload.nextItems;
      state.TnxComp = action.payload.TnxComp;
    },
    projectDatas: (state, action: PayloadAction<NotificationModerator>) => {
      state.projectDesc = action.payload.projectDesc;
      state.projectName = action.payload.projectName;
      state.deliverType = action.payload.deliverType;
    },
    NotificationsHandling: (
      state,
      action: PayloadAction<NotificationModerator>
    ) => {
      state.Notifiy = action.payload.Notifiy;
    },
    NotificationsDataHandler: (
      state,
      action: PayloadAction<NotificationModerator>
    ) => {
      state.CLientFirstName = action.payload.CLientFirstName;
      state.CLientLastName = action.payload.CLientLastName;
      state.CLientImage = action.payload.CLientImage;
      state.CLientId = action.payload.CLientId;
    },
  },
});
export const {
  projectCreator,
  NavigateNextItems,
  projectDatas,
  NotificationsHandling,
  NotificationsDataHandler
} = ProjectSlice.actions;
export default ProjectSlice.reducer;
