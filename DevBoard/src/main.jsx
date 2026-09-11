import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects.jsx'
import Dashboard from './pages/DashBoard.jsx'
import Navbar from './components/Navbar.jsx'
import {Provider} from "react-redux"
import  store from './store/Store.js'
import ProjectDetails from './pages/ProjectDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store ={store} >
    <BrowserRouter >
 
      <Navbar />
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/:id" element={<ProjectDetails />} />

     </Routes>
   
   </BrowserRouter>
   </Provider>
  </StrictMode>

)
