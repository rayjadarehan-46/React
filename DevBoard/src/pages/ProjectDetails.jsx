import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { updateProjectAsync } from "../features/projects/ProjectSlice"

function ProjectDetails() {
    const { id } = useParams()

    const projects = useSelector(
        (state) => state.projects.projects
    )

    const dispatch = useDispatch()

    const project = projects.find(
        (project) => project._id === id
    )

    const [isEditing, setIsEditing] = useState(false)
    const [editName, setEditName] = useState("")
    const [editDescription, setEditDescription] = useState("")
    const [editTechnology, setEditTechnology] = useState([])
    const [editStatus, setEditStatus] = useState("")

    if (!project) {
        return (
            <main className="min-h-[calc(100vh-81px)] bg-black text-white">
                <div className="mx-auto max-w-5xl px-6 py-12">
                    <p className="text-gray-400">
                        Loading project...
                    </p>
                </div>
            </main>
        )
    }

    const handleStartEditing = () => {
        setEditName(project.name)
        setEditDescription(project.description)
        setEditTechnology(project.technology)
        setEditStatus(project.status)
        setIsEditing(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch(
            updateProjectAsync({
                id: project._id,
                updates: {
                    name: editName,
                    description: editDescription,
                    technology: editTechnology,
                    status: editStatus
                }
            })
        )

        setIsEditing(false)
    }

    return (
        <main className="min-h-[calc(100vh-81px)] bg-black text-white">

            {isEditing ? (
                <div className="mx-auto max-w-5xl px-6 py-12">

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div>
                            <p className="mb-2 text-sm font-medium text-indigo-400">
                                EDIT PROJECT
                            </p>

                            <h1 className="text-3xl font-bold">
                                {project.name}
                            </h1>
                        </div>

                        <input
                            value={editName}
                            onChange={(event) =>
                                setEditName(event.target.value)
                            }
                            required
                            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white"
                        />

                        <textarea
                            value={editDescription}
                            onChange={(event) =>
                                setEditDescription(event.target.value)
                            }
                            required
                            rows={5}
                            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white"
                        />

                        <select
                            value={editStatus}
                            onChange={(event) =>
                                setEditStatus(event.target.value)
                            }
                            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white"
                        >
                            <option value="Planning">
                                Planning
                            </option>

                            <option value="In Progress">
                                In Progress
                            </option>

                            <option value="Completed">
                                Completed
                            </option>
                        </select>

                        <div>
                            <p className="mb-3 text-sm font-medium text-gray-400">
                                Technology
                            </p>

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {[
                                    "HTML",
                                    "CSS",
                                    "Tailwind CSS",
                                    "JavaScript",
                                    "React",
                                    "Python",
                                    "FastAPI",
                                    "Node",
                                    "Express",
                                    "MongoDB"
                                ].map((tech) => (
                                    <label
                                        key={tech}
                                        className="flex items-center gap-2 text-sm text-gray-300"
                                    >
                                        <input
                                            type="checkbox"
                                            value={tech}
                                            checked={editTechnology.includes(
                                                tech
                                            )}
                                            onChange={(event) => {
                                                const {
                                                    value,
                                                    checked
                                                } = event.target

                                                if (checked) {
                                                    setEditTechnology(
                                                        [
                                                            ...editTechnology,
                                                            value
                                                        ]
                                                    )
                                                } else {
                                                    setEditTechnology(
                                                        editTechnology.filter(
                                                            (item) =>
                                                                item !== value
                                                        )
                                                    )
                                                }
                                            }}
                                        />

                                        {tech}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                type="submit"
                                className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black"
                            >
                                Save Changes
                            </button>

                            <button
                                type="button"
                                onClick={() => setIsEditing(false)}
                                className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm text-gray-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="mx-auto max-w-5xl px-6 py-12">

                    <div className="mb-8 flex items-center gap-6">
                        <Link
                            to="/projects"
                            className="text-sm text-gray-300 transition hover:text-white"
                        >
                            ← Back to Projects
                        </Link>

                        <button
                            type="button"
                            onClick={handleStartEditing}
                            className="text-sm text-gray-300 transition hover:text-white"
                        >
                            Edit
                        </button>
                    </div>

                    <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 sm:p-8">

                        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">

                            <div>
                                <p className="mb-2 text-sm font-medium text-indigo-400">
                                    {project.name}
                                </p>

                                <h1 className="text-3xl font-bold tracking-tight">
                                    Project Details
                                </h1>

                                <p className="mt-3 max-w-2xl leading-7 text-gray-400">
                                    A detailed workspace for everything related
                                    to this project.
                                </p>
                            </div>

                            <span className="w-fit rounded-full border border-gray-700 px-3 py-1 text-xs font-medium text-gray-300">
                                {project.status}
                            </span>
                        </div>

                        <div className="my-8 h-px bg-gray-800" />

                        <div className="grid gap-8 sm:grid-cols-2">

                            <div>
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                                    Project Description
                                </p>

                                <p className="mt-2 text-lg leading-7 text-gray-300">
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                                    Tech Stack
                                </p>

                                <div className="mt-3 flex flex-wrap gap-3">
                                    {project.technology.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md bg-black px-3 py-1.5 text-xs text-gray-300 ring-1 ring-gray-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}

export default ProjectDetails