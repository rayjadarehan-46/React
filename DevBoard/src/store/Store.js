import {configureStore } from "@reduxjs/toolkit"
import projectReducer from "../features/projects/ProjectSlice";

const store  = configureStore({
    reducer : {
        projects : projectReducer
    }
})
export default store;