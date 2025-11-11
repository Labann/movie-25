import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiUrl } from "../util/config";
import { ArraySchema } from "yup";

interface IInitialState{ 
    content: [],
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
    message: string
}
export const discoverActions = createAsyncThunk<
    [], 
    void,
    {rejectValue: string}
>("/discover/actions", async (_, thunkApi) => {
    try {
        const res = await fetch(`${ApiUrl}/api/discover/action`, {
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

        return data;
    } catch (error) {
        console.error(error);
        return thunkApi.rejectWithValue((error as Error).message)
    }
})

export const discoverAnimations = createAsyncThunk<
    [], 
    void,
    {rejectValue: string}
>("/discover/animations", async (_, thunkApi) => {
    try {
        const res = await fetch(`${ApiUrl}/api/discover/animation`, {
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

        return data;
    } catch (error) {
        console.error(error);
        return thunkApi.rejectWithValue((error as Error).message)
    }
})

export const discoverDocumentaries = createAsyncThunk<
    [], 
    void,
    {rejectValue: string}
>("/discover/documentaries", async (_, thunkApi) => {
    try {
        const res = await fetch(`${ApiUrl}/api/discover/documentaries`, {
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

        return data;
    } catch (error) {
        console.error(error);
        return thunkApi.rejectWithValue((error as Error).message)
    }
})

export const discoverSeries = createAsyncThunk<
    [], 
    void,
    {rejectValue: string}
>("/discover/series", async (_, thunkApi) => {
    try {
        const res = await fetch(`${ApiUrl}/api/discover/series`, {
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

        return data;
    } catch (error) {
        console.error(error);
        return thunkApi.rejectWithValue((error as Error).message)
    }
})


const initialState: IInitialState ={
    content: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}
const discoverSlice = createSlice({
    name: "discover",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.content = []
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ""
        }
    },
    extraReducers: (builder => {
        builder
            .addCase(discoverActions.pending, (state) => {
                state.isLoading = true
            })
            .addCase(discoverActions.fulfilled, (state, action) => {
                state.isLoading = false
                state.content = action.payload
                state.isSuccess = true
                console.log(action.payload)
            })
            .addCase(discoverActions.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })

            .addCase(discoverAnimations.pending, (state) => {
                state.isLoading = true
            })
            .addCase(discoverAnimations.fulfilled, (state, action) => {
                state.isLoading = false
                state.content = action.payload
                state.isSuccess = true
                console.log(action.payload)
            })
            .addCase(discoverAnimations.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })

            .addCase(discoverDocumentaries.pending, (state) => {
                state.isLoading = true
            })
            .addCase(discoverDocumentaries.fulfilled, (state, action) => {
                state.isLoading = false
                state.content = action.payload
                state.isSuccess = true
                console.log(action.payload)
            })
            .addCase(discoverDocumentaries.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })

            .addCase(discoverSeries.pending, (state) => {
                state.isLoading = true
            })
            .addCase(discoverSeries.fulfilled, (state, action) => {
                state.isLoading = false
                state.content = action.payload
                state.isSuccess = true
                console.log(action.payload)
            })
            .addCase(discoverSeries.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })
    })
})


export const {reset} = discoverSlice.actions;

export default discoverSlice.reducer;