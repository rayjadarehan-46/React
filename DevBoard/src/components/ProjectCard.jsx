import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import {
    deleteProjectAsync,
    updateProjectAsync
} from "../features/projects/ProjectSlice"

function ProjectCard({ project }) {
    const dispatch = useDispatch()

    const handleStatusChange = (event) => {
        dispatch(
            updateProjectAsync({
                id: project._id,
                updates: {
                    status: event.target.value
                }
            })
        )
    }

    const handleDelete = () => {
        dispatch(deleteProjectAsync(project._id))
    }

    return (
        <article className="rounded-xl border border-gray-200 bg-black p-5 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">
                    <Link
                        to={`/projects/${project._id}`}
                        className="hover:text-indigo-400"
                    >
                        {project.name}
                    </Link>
                </h3>

                <span className="shrink-0 rounded-full border border-gray-700 px-2.5 py-1 text-xs font-medium text-gray-300">
                    {project.status}
                </span>
            </div>

            <div className="mb-4">
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-500">
                    Change Status
                </p>

                <select
                    value={project.status}
                    onChange={handleStatusChange}
                    className="w-full rounded-lg border border-gray-700 bg-black px-3 py-2 text-sm text-white outline-none transition focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                >
                    <option value="Planning">Planning</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            <p className="text-sm text-gray-300">
                React project
            </p>

            <button
                type="button"
                className="mt-4 w-full rounded-lg border border-red-800 px-3 py-2 text-sm font-medium text-red-400 transition hover:bg-red-950 hover:text-red-300"
                onClick={handleDelete}
            >
                Delete Project
            </button>
        </article>
    )
}

export default ProjectCard