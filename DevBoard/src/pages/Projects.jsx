import { useState } from "react";
import ProjectCard from "../components/ProjectCard"
import AddProject from "../components/AddProject";
import { useSelector } from "react-redux";

function Projects() {
    const projects = useSelector((state) => state.projects.projects)
    const loading = useSelector((state) => state.projects.loading)
    const error = useSelector((state) => state.projects.error)
    const [search, setSearch] = useState("")
    const [statusfilter, setStatusFilter] = useState("All")
    const [sortby, setSortBy] = useState("newest")
    const filteredProjects = projects.filter((project) => {
        const matchsearch = project.name.toLowerCase().includes(search.toLowerCase())
        const matchstatus = statusfilter === "All" || project.status === statusfilter
        return matchsearch && matchstatus
    })
    const sortedproject = [...filteredProjects].sort(
        (projectA, projectB) => {
            if (sortby == "newest") {
                return Number(projectB.id) - Number(projectA.id)
            } else {
                return Number(projectA.id) - Number(projectB.id)
            }
        }
    )
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
                <div className="mb-6 grid gap-3 sm:grid-cols-[1fr_200px]">
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                    <select
                        className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        value={statusfilter}
                        onChange={(e) => {
                            setStatusFilter(e.target.value)
                        }}
                    >
                        <option value="All">All</option>
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <select
                        className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        value={sortby}
                        onChange={(e) => {
                            setSortBy(e.target.value)
                        }}
                    >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="name-asc">Name A → Z</option>
                        <option value="name-desc">Name Z → A</option>
                    </select>

                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    

                        {loading ? (
                            <p>Loading projects...</p>
                        ) : error ? (
                            <p>{error}</p>
                        ) : sortedproject.length > 0 ? (
                            sortedproject.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))
                        ) : (
                            <p>No projects found.</p>
                        )}

                    


                </div>

            </div>
        </main>
    );
}


export default Projects;