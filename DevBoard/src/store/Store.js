import {configureStore } from "@reduxjs/toolkit"
import projectReducer from "../features/projects/ProjectSlice";
import authReducer from "../features/auth/AuthSlice.js"


const store  = configureStore({
    reducer : {
        projects : projectReducer,
        auth : authReducer
        
    }
})
export default store;