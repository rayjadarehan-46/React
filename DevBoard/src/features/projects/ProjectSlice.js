import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import {
    getProjects,
    createProject,
    updateProject,
    deleteProject
} from "../../api/projectsApi"

export const fetchProjects = createAsyncThunk(
    "projects/fetchProjects",
    async (_, { getState }) => {
        const token = getState().auth.token

        const projects = await getProjects(token)

        return projects
    }
)

export const createProjectAsync = createAsyncThunk(
    "projects/createProjectAsync",
    async (project, { getState }) => {
        const token = getState().auth.token

        const newProject = await createProject(
            project,
            token
        )

        return newProject
    }
)

export const updateProjectAsync = createAsyncThunk(
    "projects/updateProjectAsync",
    async ({ id, updates }, { getState }) => {
        const token = getState().auth.token

        const updatedProject = await updateProject(
            id,
            updates,
            token
        )

        return updatedProject
    }
)

export const deleteProjectAsync = createAsyncThunk(
    "projects/deleteProjectAsync",
    async (id, { getState }) => {
        const token = getState().auth.token

        const deletedId = await deleteProject(
            id,
            token
        )

        return deletedId
    }
)

const projectSlice = createSlice({
    name: "projects",

    initialState: {
        projects: [],
        loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {
        builder

            // FETCH
            .addCase(fetchProjects.pending, (state) => {
                state.loading = true
                state.error = null
            })

            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.loading = false
                state.projects = action.payload
            })

            .addCase(fetchProjects.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            // CREATE
            .addCase(createProjectAsync.pending, (state) => {
                state.loading = true
                state.error = null
            })

            .addCase(createProjectAsync.fulfilled, (state, action) => {
                state.loading = false
                state.projects.push(action.payload)
            })

            .addCase(createProjectAsync.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            // UPDATE
            .addCase(updateProjectAsync.pending, (state) => {
                state.loading = true
                state.error = null
            })

            .addCase(updateProjectAsync.fulfilled, (state, action) => {
                state.loading = false

                const index = state.projects.findIndex(
                    (project) =>
                        project._id === action.payload._id
                )

                if (index !== -1) {
                    state.projects[index] = action.payload
                }
            })

            .addCase(updateProjectAsync.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            // DELETE
            .addCase(deleteProjectAsync.pending, (state) => {
                state.loading = true
                state.error = null
            })

            .addCase(deleteProjectAsync.fulfilled, (state, action) => {
                state.loading = false

                state.projects = state.projects.filter(
                    (project) =>
                        project._id !== action.payload
                )
            })

            .addCase(deleteProjectAsync.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default projectSlice.reducer