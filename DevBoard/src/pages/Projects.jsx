import { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";
import ProjectCard from "../components/ProjectCard"
import AddProject from "../components/AddProject";
function Projects() {
    const { projects } = useContext(ProjectsContext)
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="mx-auto max-w-6xl px-6 py-12">

                <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-2 text-sm font-medium text-indigo-400">
                            WORKSPACE
                        </p>

                        <h1 className="text-4xl font-bold tracking-tight">
                            Your Projects
                        </h1>

                        <p className="mt-3 text-gray-400">
                            Everything you're currently building.
                        </p>
                    </div>
                <AddProject />
                  
                </div>
                

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />

                    ))}
                </div>

            </div>
        </main>
    );
}

export default Projects;