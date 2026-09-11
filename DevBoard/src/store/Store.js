import {configureStore } from "@reduxjs/toolkit"
import projectSlice from "../features/projects/ProjectSlice";

const store  = configureStore({
    reducer : {
        projects : projectSlice.reducer
    }
})
export default store;