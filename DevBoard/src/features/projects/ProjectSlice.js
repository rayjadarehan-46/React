import { createSlice } from "@reduxjs/toolkit"
import AddProject from "../../components/AddProject"

const projectSlice = createSlice({
    name: "projects",
    initialState: [{
        name: "Currency Converter ",
        id: "1",
        status: "Completed",
        description: "A React app for converting Currencies ",
        technology: ['HTML', 'Tailwind CSS', 'JavaScript', 'React']

    },
    {

        name: "BackGroundChanger",
        id: "2",
        status: "Completed",
        description: "A React learning project which changes Background color using State",
        technology: ['HTML', 'Tailwind CSS', 'JavaScript', 'React']


    },
    {

        name: "PasswordGenerator",
        id: "3",
        status: "In Progress",
        description: "A react app with dynamic UI to Generate Unique PassWords",
        technology: ['HTML', 'Tailwind CSS', 'JavaScript', 'React']

    }],
    reducers: {
        deleteProject: (state, action) => {
            return state.filter((project) => project.id != action.payload)

        },
        changeStatus: (state, action) => {
            const project = state.find((project) => project.id === action.payload.id)
            project.status = action.payload.status
        },
        addProject: (state, action) => {
            const project = {
                name: action.payload.name,
                description: action.payload.description,
                technology: action.payload.technology, id: Date.now().toString(),
                status: "Not Started"
            }
            state.push(project)
        },
        updateProject : (state,action) => {
            const project = state.find((project) => project.id === action.payload.id)

            Object.assign(project, action.payload.updates)
        }
    }
})

export const { deleteProject, changeStatus ,addProject , updateProject} = projectSlice.actions
export default projectSlice