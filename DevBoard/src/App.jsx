import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import Navbar from "./components/Navbar"
import Dashboard from "./pages/DashBoard"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"
import { fetchProjects } from "./features/projects/ProjectSlice"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProjects())
    }, [dispatch])

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route
                    path="/projects/:id"
                    element={<ProjectDetails />}
                />
            </Routes>
        </>
    )
}

export default App 