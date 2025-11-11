import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import discoverReducer  from "./discoverSlice"
const store = configureStore({
    reducer: {
        auth: authReducer,
        discover: discoverReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;