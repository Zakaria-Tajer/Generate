// ProjectSlice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "interfaces/User";

export const initialState: Project = {
  isOpened: false,
  nextItems: false,
  TnxComp: false,
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
    }
  },
});
export const { projectCreator,NavigateNextItems } = ProjectSlice.actions;
export default ProjectSlice.reducer;
