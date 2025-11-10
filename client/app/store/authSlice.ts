import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/my_types";

interface IInitialState{
    currentUser: IUser | null
    isLoading: boolean
    isError: boolean
    isSuccess: boolean
    message: string
}
const initialState: IInitialState = {
    currentUser: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ""
}


const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.currentUser = null
            state.isLoading = false
            state.isError = false
            state.message = ""
        }
    },
    extraReducers: (builder) => {
       // builder
    }
})

export const {reset} = authSlice.actions;

export default authSlice.reducer;