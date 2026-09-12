import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
    authInitialized: false,
    loading: false,
    error: null

}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
            localStorage.setItem(
                "user",
                JSON.stringify(action.payload)
            )
        },
        logout: (state) => {
            state.user = null
            state.isAuthenticated = false
            localStorage.removeItem("user")
        },
        restoreUser: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
            state.authInitialized = true
        },
        finishAuthInitialization: (state) => {
            state.authInitialized = true
        }
    },
    extraReducers: () => { }
})
export const { login, logout, restoreUser , finishAuthInitialization } = authSlice.actions
export default authSlice.reducer 