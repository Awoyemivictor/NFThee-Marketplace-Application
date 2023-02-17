import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import metaReducer from "./metaSlice";
import favoriteReducer from "./favoriteSlice";


export function makeStore() {
    return configureStore({
        reducer: {
            user: userReducer,
            meta: metaReducer,
            favorite: favoriteReducer,
        },
        devTools: process.env.NODE_ENV !== 'production'
    })
}

export const store = makeStore()

export const RootStore = makeStore;
export const RootState = RootStore['getState'];
export const AppDispatch = store.dispatch
