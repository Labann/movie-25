import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiUrl } from "../util/config";
import { IMovie } from "../types/my_types";

interface IInitialState{ 
    content: IMovie[],
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
    message: string
}
export const discoverActions = createAsyncThunk<
    {page: number, results: IMovie[]}, 
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
    {page: number, results: IMovie[]}, 
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
    {page: number, results: IMovie[]}, 
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
    {page: number, results: IMovie[]}, 
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



export const discoverDrama = createAsyncThunk<
    {page: number, results: IMovie[]}, 
    void,
    {rejectValue: string}
>("/discover/drama", async (_, thunkApi) => {
    try {
        const res = await fetch(`${ApiUrl}/api/discover/drama`, {
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
                state.content = action.payload.results
                state.isSuccess = true
                console.log(action.payload.results)
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
                state.content = action.payload.results
                state.isSuccess = true
                console.log(action.payload.results)
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
                state.content = action.payload.results
                state.isSuccess = true
                console.log(action.payload.results)
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
                state.content = action.payload.results
                state.isSuccess = true
                console.log(action.payload.results)
            })
            .addCase(discoverSeries.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })

            .addCase(discoverDrama.pending, (state) => {
                state.isLoading = true
            })
            .addCase(discoverDrama.fulfilled, (state, action) => {
                state.isLoading = false
                state.content = action.payload.results
                state.isSuccess = true
                console.log(action.payload.results)
            })
            .addCase(discoverDrama.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })
    })
})


export const {reset} = discoverSlice.actions;

export default discoverSlice.reducer;