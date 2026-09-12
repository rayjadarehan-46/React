import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/DashBoard"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"
import { fetchProjects } from "./features/projects/ProjectSlice"
import ProtectedRoute from "./components/ProtectedRoute"
import { finishAuthInitialization, restoreUser } from "./features/auth/AuthSlice"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        const savedUser = localStorage.getItem("user")
        if(savedUser) {
            const user = JSON.parse(savedUser)
            dispatch(restoreUser(user))
        }else{
            dispatch(finishAuthInitialization())
        }
        dispatch(fetchProjects())
    }, [dispatch])

    return (
        <>
            <Navbar />

            <Routes>
                <Route  path="/login" element ={< Login />}/>
                <Route path="/" element={ 
                     <ProtectedRoute>
                        <Dashboard />
                     </ProtectedRoute> } />
                <Route path="/projects" element={
                    <ProtectedRoute>
                        <Projects />
                    </ProtectedRoute>
                } />
                <Route path="/projects/:id"element={
                    <ProtectedRoute>
                         <ProjectDetails />
                    </ProtectedRoute>
                } />
            </Routes>
        </>
    )
}

export default App 