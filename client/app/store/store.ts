import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import discoverReducer  from "./discoverSlice"
import movieReducer from "./movieSlice"
import personReducer from "./personSlice"
const store = configureStore({
    reducer: {
        auth: authReducer,
        discover: discoverReducer,
        movie: movieReducer,
        person: personReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;