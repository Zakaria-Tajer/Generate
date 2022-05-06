import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "interfaces/Switch";

export const initialState: Auth = {
    show: false,
    load: false,
    success: false
}



export const switchSlice = createSlice({
    name: "switch",
    initialState,
    reducers: {
        display: (state, action:PayloadAction<boolean>) => {
            state.show = action.payload
        },
        loading: (state,action:PayloadAction<boolean>) => {
            state.load = action.payload
        },
        getLoginSuccess: (state,action:PayloadAction<boolean>) => {
            state.success = action.payload
        }
    }

})
export const { display,loading,getLoginSuccess } = switchSlice.actions;
export default switchSlice.reducer;