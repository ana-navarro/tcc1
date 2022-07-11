import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../screens/auth/login/features/authSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
})