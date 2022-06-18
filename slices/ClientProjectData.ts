import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectClientData, userData } from "interfaces/UserData";

export const initialState: ProjectClientData = {
  ProjectDeadline: "",
  isProject: false,
  projectName: "",
  projectDescription: "",
  CompletedTasks: "",
  Progress: "",
  starter_Tasks: "",
};

export const ClientProjectData = createSlice({
  name: "Userdata",
  initialState,
  reducers: {
    projectData: (state, action: PayloadAction<ProjectClientData>) => {
      state.ProjectDeadline = action.payload.ProjectDeadline;
      state.isProject = action.payload.isProject;
      state.projectName = action.payload.projectName;
      state.projectDescription = action.payload.projectDescription;
      state.CompletedTasks = action.payload.CompletedTasks;
      state.Progress = action.payload.Progress;
      state.starter_Tasks = action.payload.starter_Tasks;
    },
  },
});
export const { projectData } = ClientProjectData.actions;
export default ClientProjectData.reducer;
