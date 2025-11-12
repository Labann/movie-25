import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMovieCast } from "../types/my_types";
import { ApiUrl } from "../util/config";


interface IInitialState{
    person: IMovieCast[],
    isLoading: boolean
    isError: boolean
    isSuccess: boolean
    message: string
}

const initialState: IInitialState ={ 
    person: [],
    isLoading : false,
    isError: false,
    isSuccess:  false,
    message: ""
};

export const fetchFamousActors =  createAsyncThunk<
    {page: number, results: IMovieCast[]},
    void,
    {rejectValue: string}
>("/person/famous", async (_, thunkApi) => {
    try {
        const res = await fetch(`${ApiUrl}/api/person/famous`, {
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
        return thunkApi.rejectWithValue((error as Error).message)
    }
})
const personSlice = createSlice({
    name: "person",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.person = []
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchFamousActors.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchFamousActors.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.person = action.payload.results
            })
            .addCase(fetchFamousActors.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })
    }
})


export const {reset} = personSlice.actions;

export default personSlice.reducer;