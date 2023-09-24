import { configureStore} from "@reduxjs/toolkit";
import { vacationsApi } from "./api/vacations.api.";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer:{
    [vacationsApi.reducerPath]:vacationsApi.reducer
},
middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat(vacationsApi.middleware)
})

setupListeners(store.dispatch)