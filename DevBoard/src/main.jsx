import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'
import Dashboard from './pages/DashBoard.jsx'
import ProjectProvider from './context/ProjectsContext.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
     <ProjectProvider>
      <Navbar />
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/:id" element={<ProjectDetails />} />

     </Routes>
     </ProjectProvider>
   </BrowserRouter>
  </StrictMode>,
)
