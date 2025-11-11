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


export const getMe = createAsyncThunk<
    IUser,
    void,
    {rejectValue: string}
>("/user/me", async (_, thunkApi) => {
    try {
        const res = await fetch(`${ApiUrl}/api/user/me`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include"
        })

        const data = await res.json();
        
        if(res.status !== 200){
            return thunkApi.rejectWithValue(data.error);
        }
        localStorage.setItem("currentUser", JSON.stringify(data))
        return data;
    } catch (error) {
        console.error(error);
        return thunkApi.rejectWithValue((error as Error).message)
    }
})

export const logout = createAsyncThunk<
    {message: string}, 
    void,
    {rejectValue: string}
>("/auth/logout", async (_ , thunkApi) =>{
    try {
        const res = await fetch(`${ApiUrl}/api/auth/logout`, {
            method: "POST",
            headers :{
                "Content-type": "application/json"
            },
            credentials :"include"
        })

        const data = await res.json()

        if(res.status !== 200){
            return thunkApi.rejectWithValue(data.error);
        }
        localStorage.removeItem("currentUser");
        return data;
    } catch (error) {
        console.error(error)
        return thunkApi.rejectWithValue((error as Error).message)
    }
})
export const loginV1 = createAsyncThunk<
IUser,
{email: string, password: string},
{rejectValue: string}
>("/auth/v1/login", async (user, thunkApi) => {
    try {
        const res = await fetch(`${ApiUrl}/api/auth/v1/login`, {
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

        localStorage.setItem("currentUser", JSON.stringify(data))
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
>("/auth/v1/sign_up", async (user, thunkApi) => {
    try {
        const res = await fetch(`${ApiUrl}/api/auth/v1/sign_up`, {
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

        localStorage.setItem("currentUser", JSON.stringify(data))

        return data;
    } catch (error) {
        console.error(error);
        return thunkApi.rejectWithValue((error as Error).message)
    }
})

export const login_v2 = createAsyncThunk<
void,
void,
{rejectValue: string}
>("/auth/v2/login", async (_, thunkApi) => {
    try {
        window.location.href = `${ApiUrl}/api/auth/v2/login` 
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
        
        .addCase(getMe.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getMe.fulfilled, (state, action) => {
            state.isLoading = false
            state.currentUser = action.payload
            state.isSuccess = true
        })
        .addCase(getMe.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload as string
        })
        .addCase(logout.pending, (state) => {
            state.isLoading = true
        })
        
    }
})

export const {reset} = authSlice.actions;

export default authSlice.reducer;