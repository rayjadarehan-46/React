import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Register from "./pages/RegisterUser"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/DashBoard"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"
import ProtectedRoute from "./components/ProtectedRoute"

import {
    finishAuthInitialization,
    restoreUser
} from "./features/auth/AuthSlice"

import { fetchProjects } from "./features/projects/ProjectSlice"

function App() {
    const dispatch = useDispatch()

    const { authInitialized, isAuthenticated } = useSelector(
        (state) => state.auth
    )

    // 1. Restore authentication when the app starts
    useEffect(() => {
        const savedUser = localStorage.getItem("user")
        const savedToken = localStorage.getItem("token")

        if (savedUser && savedToken) {
            dispatch(
                restoreUser({
                    user: JSON.parse(savedUser),
                    token: savedToken
                })
            )
        } else {
            dispatch(finishAuthInitialization())
        }
    }, [dispatch])

    // 2. Fetch projects only after authentication is known
    useEffect(() => {
        if (authInitialized && isAuthenticated) {
            dispatch(fetchProjects())
        }
    }, [authInitialized, isAuthenticated, dispatch])

    return (
        <>
            <Navbar />

            <Routes>
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/projects"
                    element={
                        <ProtectedRoute>
                            <Projects />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/projects/:id"
                    element={
                        <ProtectedRoute>
                            <ProjectDetails />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </>
    )
}

export default App