import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/my_types";
import { ApiUrl } from "../util/config";

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

export const loginV1 = createAsyncThunk<
IUser,
{email: string, password: string},
{rejectValue: string}
>("/auth/login", async (user, thunkApi) => {
    try {
        const res = await fetch(`${ApiUrl}/auth/v1/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(user)
        })

        const data = await res.json();

        if(res.status !== 200){
            return thunkApi.rejectWithValue(data.error);
        }

        return data;
    } catch (error) {
        console.error(error);
        return thunkApi.rejectWithValue((error as Error).message)
    }
})

export const sign_upV1 = createAsyncThunk<
    IUser,
    {email: string, password: string},
    {rejectValue: string}
>("/auth/sing_up", async (user, thunkApi) => {
    try {
        const res = await fetch(`${ApiUrl}/api/auth/sign_up`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(user)
        })
        const data = await res.json();

        if(res.status !== 201){
            return thunkApi.rejectWithValue(data.error);
        }

        return data;
    } catch (error) {
        console.error(error);
        return thunkApi.rejectWithValue((error as Error).message)
    }
})
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
       builder
        .addCase(loginV1.pending, (state) => {
            state.isLoading = true
        })
        .addCase(loginV1.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.currentUser = action.payload as IUser
        })
        .addCase(loginV1.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload as string
        })
        .addCase(sign_upV1.pending, (state) => {
            state.isLoading = true
        })
        .addCase(sign_upV1.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.currentUser = action.payload as IUser
        })
        .addCase(sign_upV1.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload as string
        })
    }
})

export const {reset} = authSlice.actions;

export default authSlice.reducer;