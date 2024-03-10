import { configureStore } from '@reduxjs/toolkit'
import busquedaReducer from './operaciones'

export const store = configureStore({
    reducer: {
        counter: busquedaReducer,
    }
})