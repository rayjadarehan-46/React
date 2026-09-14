import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginUser } from "../../api/authApi.js"

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    authInitialized: false,
    loading: false,
    error: null
}

export const loginUserAsync = createAsyncThunk(
    "auth/loginUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const data = await loginUser(credentials)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.isAuthenticated = false

            localStorage.removeItem("user")
            localStorage.removeItem("token")
        },

        restoreUser: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isAuthenticated = true
            state.authInitialized = true
        },

        finishAuthInitialization: (state) => {
            state.authInitialized = true
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginUserAsync.pending, (state) => {
                state.loading = true
                state.error = null
            })

            .addCase(loginUserAsync.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload.user
                state.token = action.payload.token
                state.isAuthenticated = true
                state.authInitialized = true

                localStorage.setItem(
                    "user",
                    JSON.stringify(action.payload.user)
                )

                localStorage.setItem(
                    "token",
                    action.payload.token
                )
            })

            .addCase(loginUserAsync.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const {
    logout,
    restoreUser,
    finishAuthInitialization
} = authSlice.actions

export default authSlice.reducer