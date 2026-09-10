import { createContext,useState } from "react"

const ProjectsContext = createContext()

function ProjectsProvider({ children }) {
    const [projects, setProjects] = useState([{
        name: "Currency Converter ",
        id: "1",
        status: "Completed",
        description :"A React app for converting Currencies ",
        technology : ['html','TAILWIND CSS' ,'JavaScript' ,'React']

    },
    {

        name: "BackGroundChanger",
        id: "2",
        status: "Completed",
        description :"A React learning project which changes Background color using State",
        technology : ['html','TAILWIND CSS' ,'JavaScript' ,'React']


    },
    {

        name: "PasswordGenerator",
        id: "3",
        status: "Completed",
        description :"A react app with dynamic UI to Generate Unique PassWords",
        technology : ['html','TAILWIND CSS' ,'JavaScript' ,'React']

    }


    ]) 
      const handleAddProject = (value) => {
        setProjects([...projects ,{name : value ,status :" Not started" , id: Date.now()}])
        
    }
      const handleDelete = (projectID ) => {
        setProjects(
            projects.filter((project) => project.id != projectID)
        )}
      const handleStatusChange = (ProjectID , newStatus) => {
        setProjects(
            projects.map((project) => (project.id === ProjectID ? {...project ,status : newStatus }: project))
        )
      }
        
    return (
        <ProjectsContext.Provider value={{ projects ,handleAddProject , handleDelete ,handleStatusChange}} >
            {children}
        </ProjectsContext.Provider>
    )
}

export { ProjectsContext }
export default ProjectsProvider



