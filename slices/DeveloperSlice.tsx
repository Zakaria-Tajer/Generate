import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dev } from "interfaces/SuperUsers";



export const initialState: Dev = {
    id: ''
};

export const DeveloperSlice = createSlice({
    name: "UsersFilters",
    initialState,
    reducers: {
        getDevId: (state, action: PayloadAction<Dev>) => {
            state.id = action.payload.id
        }

    },
});

export const { getDevId } = DeveloperSlice.actions;
export default DeveloperSlice.reducer;
