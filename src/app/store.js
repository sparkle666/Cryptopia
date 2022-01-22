import {configureStore} from "@reduxjs/toolkit"
import { cryptoApi } from "../services/cryptoApi"
import { cryptoNewsApi } from "../services/cryptoNewsApi"


export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,//get all reducer paths from crypto api
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer //get all reducer paths from crypto api
    }, // middleware gives us some cool caching capaabilities
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware),

})