import { configureStore } from "@reduxjs/toolkit";
import game from "./slice";

export const store = configureStore({
    reducer:{
        game:game,
    }
})

export type RootState = ReturnType <typeof store.getState>;
export type Appdispatch = ReturnType <typeof store.dispatch>;