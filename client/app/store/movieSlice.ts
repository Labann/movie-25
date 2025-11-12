import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMovie, IMovieCast } from "../types/my_types";
import { ApiUrl } from "../util/config";


interface IInitialState{
    movie: IMovie | null,
    trending: IMovie[] | null
    popular: IMovie[]
    cast: IMovieCast[]
    isLoading: boolean,
    isError: boolean
    isSuccess: boolean
    message: string
}
const initialState: IInitialState = {
    movie: null,
    trending: [],
    cast: [],
    popular: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ""
}

export const fetchMovieDetails = createAsyncThunk<
    IMovie,
    {movie_id: string},
    {rejectValue: string}
>("/movie/details", async ({movie_id}, thunkApi) => {
    try {
        const res = await fetch(`${ApiUrl}/api/movie/${movie_id}`, {
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
        return thunkApi.rejectWithValue((error as Error).message);
    }
})

export const fetchMovieCast = createAsyncThunk<
    {id: number, cast: IMovieCast[]},
    {movie_id: string},
    {rejectValue: string}
>("/movie/cast", async ({movie_id}, thunkApi) => {
    try {
        const res = await fetch(`${ApiUrl}/api/movie/cast/${movie_id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include"
        });
        const data = await res.json();

        if(res.status !== 200){
            return thunkApi.rejectWithValue(data.error);
        }

        return data;
    } catch (error) {
        console.error(error);
        return thunkApi.rejectWithValue((error as Error).message);
    }
})

export const fetchTrending = createAsyncThunk<
    {page: number, results: IMovie[]},
    void,
    {rejectValue: string}
>("/movie/trending", async (_, thunkApi) => {
    try {
        const res = await fetch(`${ApiUrl}/api/movie/trending`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
            credentials: "include"
        })

        const data = await res.json();

        if(res.status !== 200){
            return thunkApi.rejectWithValue(data.error)
        }

        return data;
    } catch (error) {
        console.error(error);
        return thunkApi.rejectWithValue((error as Error).message)
    }
})

export const fetchPopular = createAsyncThunk<
    {page: number, results: IMovie[]},
    void,
    {rejectValue: string}
>("/movie/popular", async (_, thunkApi) => {
    try {
        const res = await fetch(`${ApiUrl}/api/movie/popular`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                
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
const movieSlice = createSlice({
    name: "movie",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.movie = null
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchMovieDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchMovieDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.movie = action.payload
            })
            .addCase(fetchMovieDetails.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })

            .addCase(fetchMovieCast.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchMovieCast.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.cast = action.payload.cast
            })
            .addCase(fetchMovieCast.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })

            .addCase(fetchTrending.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchTrending.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.trending = action.payload.results
            })
            .addCase(fetchTrending.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })

            .addCase(fetchPopular.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPopular.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.trending = action.payload.results
            })
            .addCase(fetchPopular.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })
    }
})

export const {reset} = movieSlice.actions;

export default movieSlice.reducer;