import { useState } from 'react'
import './App.css'
import ProjectCard from './components/ProjectCard'
import AddProject from './components/AddProject'
import { Routes, Route } from 'react-router-dom'

function App() {
  const[projects , setProjects] = useState([{
    name:"Currency Converter ",
    id :"1",
    status :"Completed"

  } ,
  {
 
    name:"BackGroundChanger",
    id :"2",
    status :"Completed"


  },
  {
 
    name:"PasswordGenerator",
    id :"3",
    status :"Completed"

  }
])

   const handleAddProject = (value) => {
     
    setProjects([...projects , { name : value ,id : Date.now(),status : "NOT Started"}])
   }

   const handleStatusChange = (ProjectId , Status) => {
      setProjects(
        projects.map((project) => {
            if(project.id === ProjectId){
                return {...project , status : Status}
            }
            return project

        })
      )
   }
   const handleDelete = (ProjectId) => {
    setProjects(
        projects.filter((project) => project.id !== ProjectId)
    )
   }
  
    return (
        <main className="min-h-screen bg-black text-white">
            
            <header className="border-b border-gray-200 bg-black">
                <div className="mx-auto max-w-6xl px-6 py-5">
                    <h1 className="text-2xl font-bold text-white">
                        DevBoard
                    </h1>

                    <p className="text-sm text-gray-100">
                        Your personal developer workspace
                    </p>
                </div>
            </header>

            <div className="mx-auto max-w-6xl px-6 py-10">

                < AddProject onAddProject = {handleAddProject} />

                <section>
                    <div className="mb-5">
                        <h2 className="text-xl font-bold text-white">
                            Your Projects
                        </h2>

                        <p className="text-sm text-gray-100">
                            Projects you're currently working on.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        
                      {
                        projects.map(project => (
                          <ProjectCard 
                          key ={project.id}
                           project ={project}
                           onStatusChange ={handleStatusChange}
                           onDelete = {handleDelete}
                           
                           />
                        ))
                      }

                    </div>
                </section>

            </div>
        </main>
    );
}
export default App
