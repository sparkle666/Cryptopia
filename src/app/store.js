import {configureStore} from "@reduxjs/toolkit"
import { cryptoApi } from "../services/cryptoApi"
// import { setupListeners } from '@reduxjs/toolkit/query'
// import {setupListeners} from "@reduxjs/toolkit/query"

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer //get all reducer paths from crypto api
    }, // middleware gives us some cool caching capaabilities
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(cryptoApi.middleware),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware)

})