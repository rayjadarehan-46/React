import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/DashBoard"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"
import ProtectedRoute from "./components/ProtectedRoute"
import DotField from "./components/DotedField"

import {
    finishAuthInitialization,
    restoreUser
} from "./features/auth/AuthSlice"

import { fetchProjects } from "./features/projects/ProjectSlice"

function App() {
    const dispatch = useDispatch()

    const {
        authInitialized,
        isAuthenticated
    } = useSelector((state) => state.auth)

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

    useEffect(() => {
        if (authInitialized && isAuthenticated) {
            dispatch(fetchProjects())
        }
    }, [authInitialized, isAuthenticated, dispatch])

    return (
        <div className="relative min-h-screen bg-black text-white">

            {/* Fixed dotted background */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <DotField
                    dotRadius={1}
                    dotSpacing={23}
                    bulgeStrength={67}
                    glowRadius={50}
                    sparkle={false}
                    waveAmplitude={0}
                    cursorRadius={100}
                    cursorForce={0.29}
                    bulgeOnly
                    gradientFrom="#000000"
                    gradientTo="#ffffff"
                    glowColor="#120F17"
                />
            </div>

            {/* Application */}
            <div className="relative z-10 pt-19">
                <Navbar />

                <Routes>
                    <Route
                        path="/login"
                        element={<Login />}
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
            </div>
        </div>
    )
}

export default App