import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMovie, IMovie_on_view, IMovieCast, IReview } from "../types/my_types";
import { ApiUrl } from "../util/config";

const initialMovie = {
        "adult": false,
            "backdrop_path": "/G3vrVlsqsNPSYvyoG2lTRxVGom.jpg",
            "genres": [
                {
                "id": 99,
                "name": "Documentary"
                }
            ],
            genre_ids: [99],
            cast: [],
            "id": 685264,
            "original_language": "en",
            "original_title": "Pray Away",
            "overview": "In the 1970s, five men struggling with being gay in their Evangelical church started a bible study to help each other leave the \"homosexual lifestyle.\" They quickly received over 25,000 letters from people asking for help and formalized as Exodus International, the largest and most controversial conversion therapy organization in the world. But leaders struggled with a secret: their own “same-sex attractions” never went away. After years as Christian superstars in the religious right, many of these men and women have come out as LGBTQ, disavowing the very movement they helped start. Focusing on the dramatic journeys of former conversion therapy leaders, current members, and a survivor, PRAY AWAY chronicles the “ex gay\" movement’s rise to power, persistent influence, and the profound harm it causes.",
            "popularity": 18.4342,
            "poster_path": "/1wikrtZZZoThwnHulB7klQek4Ai.jpg",
            
            "release_date": "2021-06-16",
            "runtime": 101,
            "title": "Pray Away",
            "video": false,
            "vote_average": 6.682,
            "vote_count": 99,
            
    }
interface IInitialState{
    movie: IMovie 
    movie_on_view: IMovie_on_view[]
    trending: IMovie[] 
    reviews: IReview[]
    popular: IMovie[] 
    recommendations: IMovie[]
    cast: IMovieCast[]
    isLoading: boolean,
    isError: boolean
    isSuccess: boolean
    message: string
}
const initialState: IInitialState = {
    movie:initialMovie,
    movie_on_view: [],
    reviews: [],
    trending: [],
    recommendations: [],
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
        const res = await fetch(`${ApiUrl}/api/movie/details/${movie_id}`, {
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

export const fetch_movie_on_view = createAsyncThunk<
    {id: number, results: IMovie_on_view[]},    
    {movie_id: number},
    {rejectValue: string}
>("/movie/movie_on_view",  async ({movie_id}, thunkApi) => {
    try {
        const res = await fetch(`${ApiUrl}/api/movie/on_view/${movie_id}`, {
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


export const fetch_movie_reviews = createAsyncThunk<
    {id: number, page: number, results: IReview[]},
    {movie_id: string},
    {rejectValue: string}
>("/movie/reviews", async ({movie_id}, thunkApi) => {
    try {
        const res = await fetch(`${ApiUrl}/api/movie/reviews/${movie_id}`, {
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
        return thunkApi.rejectWithValue((error as Error).message);
    }
})

export const fetch_recommendations = createAsyncThunk<
    {page: number, results: IMovie[]},
    {movie_id: number},
    {rejectValue: string}
>("/movie/recommended", async ({movie_id}, thunkApI) => {
    try {
        const res = await fetch(`${ApiUrl}/api/movie/recommended_for_you/${movie_id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();

        if(res.status !== 200){
            return thunkApI.rejectWithValue(data.error);
        }

        return data;
    } catch (error) {
        console.error(error);
        return thunkApI.rejectWithValue((error as Error).message)
    }
})
const movieSlice = createSlice({
    name: "movie",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.movie = initialMovie
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
                state.popular = action.payload.results
            })
            .addCase(fetchPopular.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })

            .addCase(fetch_movie_on_view.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetch_movie_on_view.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.movie_on_view = action.payload.results
            })
            .addCase(fetch_movie_on_view.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })
            

            .addCase(fetch_movie_reviews.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetch_movie_reviews.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.reviews = action.payload.results
            })
            .addCase(fetch_movie_reviews.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })

            .addCase(fetch_recommendations.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetch_recommendations.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.recommendations = action.payload.results
            })
            .addCase(fetch_recommendations.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })
    }
})

export const {reset} = movieSlice.actions;

export default movieSlice.reducer;