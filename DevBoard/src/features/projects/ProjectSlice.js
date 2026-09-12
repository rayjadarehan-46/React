import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { getProjects, createProject, updateProject, deleteProject } from "../../api/projectsApi"


export const fetchProjects = createAsyncThunk(
    "projects/fetchProjects",
    async () => {
        const projects = await getProjects()
        return projects
    }
)
export const createProjectAsync = createAsyncThunk(
    "projects/createProjectAsync",
    async (project) => {
        const newProject = await createProject(project)
        return newProject
    }
)
export const updateProjectAsync = createAsyncThunk(
    "projects/updateProjectAsync",
    async ({ id, updates }) => {
        const updatedProject = await updateProject(id, updates)
        return updatedProject
    }
)
export const deleteProjectAsync = createAsyncThunk(
    "projects/deleteProjectAsync",
    async (id) => {
        const deleteId = await deleteProject(id)
        return deleteId
    }
)


const projectSlice = createSlice({

    name: "projects",

    initialState: {
        projects: [],
        loading: false,
        error: null
    },
    reducers :{},

    extraReducers: (builder) => {

        builder
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
            .addCase(updateProjectAsync.pending, (state) => {
                state.loading = true
                state.error = null
            })

            .addCase(updateProjectAsync.fulfilled, (state, action) => {
                state.loading = false

                const index = state.projects.findIndex(
                    (project) => project.id === action.payload.id
                )

                if (index !== -1) {
                    state.projects[index] = action.payload
                }
            })

            .addCase(updateProjectAsync.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(deleteProjectAsync.pending, (state) => {
                state.loading = true
                state.error = null
            })

            .addCase(deleteProjectAsync.fulfilled, (state, action) => {
                state.loading = false
                state.projects = state.projects.filter(
                    (project) => project.id !== action.payload
                )
            })

            .addCase(deleteProjectAsync.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

    }
})





export default projectSlice.reducer