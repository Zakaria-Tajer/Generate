// ProjectSlice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth, Project } from "interfaces/User";

export const initialState: Project = {
  isOpened: false,
  nextItems: false,
  TnxComp: false,
  projectDesc: "",
  projectName: "",
  deliverType: "",
  Notifiy: false,
  isConfirmed: false
};

export const ProjectSlice = createSlice({
  name: "MultiUsers",
  initialState,
  reducers: {
    projectCreator: (state, action: PayloadAction<Project>) => {
      state.isOpened = action.payload.isOpened;
    },
    NavigateNextItems: (state, action: PayloadAction<Project>) => {
      state.nextItems = action.payload.nextItems;
      state.TnxComp = action.payload.TnxComp;
    },
    projectDatas: (state, action: PayloadAction<Project>) => {
      state.projectDesc = action.payload.projectDesc;
      state.projectName = action.payload.projectName;
      state.deliverType = action.payload.deliverType;
    },
    NotificationsHandling: (state, action: PayloadAction<Project>) => {
      state.Notifiy = action.payload.Notifiy;
    },
    confirmingProject: (state, action: PayloadAction<Project>) => {
      state.isConfirmed = action.payload.isConfirmed;
    },

  },
});
export const {
  projectCreator,
  NavigateNextItems,
  projectDatas,
  NotificationsHandling,
  confirmingProject
} = ProjectSlice.actions;
export default ProjectSlice.reducer;
