import { configureStore} from "@reduxjs/toolkit";
import { vacationsApi } from "./api/vacations.api.";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import userReducer from "./slices/userSlice";
import followingReducer from "./slices/followingSlice";

export const store = configureStore({
    reducer:{
    [vacationsApi.reducerPath]:vacationsApi.reducer,
    user: userReducer,
    following: followingReducer
},
middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat(vacationsApi.middleware)
})

setupListeners(store.dispatch)