import { useContext } from "react";
import {ProjectsContext}from "../context/ProjectsContext";
import { Link  } from "react-router-dom";


function ProjectCard({ project }) {

     const {handleDelete , handleStatusChange} = useContext(ProjectsContext)
    return (
        <article className="rounded-xl border border-gray-200 bg-black text-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="mb-4 flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white">
                    <Link to={`/projects/${project.id}`}>{project.name}</Link>
                </h3>

                <span className="rounded-full bg-black px-2.5 py-1 text-xs font-medium text-white">
                    {project.id}
                </span>
            </div>
            <div className="mb-4">
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-200">
                    Status
                </p>

                <p className="text-sm font-medium text-gray-100">
                    <select
                        value={project.status}
                        onChange={(e) => {
                            handleStatusChange(project.id, e.target.value)
                        }}
                        className="w-full rounded-lg border border-gray-700 bg-black px-3 py-2 text-sm text-white outline-none transition focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                    >
                        <option value="NOt Started">Not Started</option>
                        <option value="IN Progress">In Progress</option>
                        <option value="COMPLETED">Completed</option>
                    </select>
                </p>
            </div>

            <p className="text-sm text-gray-300">
                React project
            </p>
            <button
                type="button"
                className="mt-4 w-full rounded-lg border border-red-800 px-3 py-2 text-sm font-medium text-red-400 transition hover:bg-red-950 hover:text-red-300"
                onClick={(e) => {
                    handleDelete(project.id)
                }}
            >
                Delete Project
            </button>

        </article>
    );
}

export default ProjectCard;
