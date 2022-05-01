import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "interfaces/Switch";

export const initialState: Auth = {
    show: false,
}

export const switchSlice = createSlice({
    name: "switch",
    initialState,
    reducers: {
        display: (state, action:PayloadAction<boolean>) => {
            state.show = action.payload
        }
    }

})
export const { display } = switchSlice.actions;
export default switchSlice.reducer;