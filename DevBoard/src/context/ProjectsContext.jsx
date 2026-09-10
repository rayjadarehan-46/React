import { createContext, useState } from "react"

const ProjectsContext = createContext()

function ProjectsProvider({ children }) {
    const [projects, setProjects] = useState([{
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
        technology: ['HTML','Tailwind CSS', 'JavaScript', 'React']

    }


    ])
    const handleAddProject = (projectName, description, technology) => {
        setProjects([...projects,
        { name: projectName, status: " Not started", id: Date.now().toString(), description: description, technology: technology }])

    }
    const handleDelete = (projectID) => {
        setProjects(
            projects.filter((project) => project.id != projectID)
        )
    }
    const handleStatusChange = (ProjectID, newStatus) => {
        setProjects(
            projects.map((project) => (project.id === ProjectID ? { ...project, status: newStatus } : project))
        )
    }
    const handleEditProject = (ProjectID, updatedproject) => {
        setProjects(
            projects.map((project) => (project.id === ProjectID ? { ...project, ...updatedproject } : project))
        )
    }

    return (
        <ProjectsContext.Provider value={{ projects, handleAddProject, handleDelete, handleStatusChange, handleEditProject }} >
            {children}
        </ProjectsContext.Provider>
    )
}

export { ProjectsContext }
export default ProjectsProvider



