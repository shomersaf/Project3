import { configureStore} from "@reduxjs/toolkit";
import { vacationsApi } from "./api/vacations.api.";

export const store = configureStore({
    reducer:{
    [vacationsApi.reducerPath]:vacationsApi.reducer
},
middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat(vacationsApi.middleware)
})