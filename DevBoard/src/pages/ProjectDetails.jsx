import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProject } from "../features/projects/ProjectSlice";
function ProjectDetails() {
    const { id } = useParams()
    const projects = useSelector((state) => state.projects)
    const project = projects.find((project) => project.id === id)
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false)
    const [editName, setEditName] = useState(project.name)
    const [editDescription, setEditDescription] = useState(project.description)
    const [editTechnology, setEditTechnology] = useState(project.technology)
    const [editStatus, setEditStatus] = useState(project.status)
    return (
        <main className="min-h-[calc(100vh-81px)] bg-black text-white">

            {isEditing ? (
                <form
                    id="Editing-Form"
                    onSubmit={(e) => {
                        e.preventDefault()

                        dispatch(updateProject({
                            id: project.id,
                            updates: {
                                name: editName,
                                description: editDescription,
                                technology: editTechnology,
                                status: editStatus
                            }
                        }))
                        setIsEditing(false)
                    }}
                    className="space-y-6"
                >
                    <input
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        required
                        className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white"
                    />

                    <input
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        required
                        className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white"
                    />

                    <select
                        value={editStatus}
                        onChange={(e) => setEditStatus(e.target.value)}
                        className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white"
                    >
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Python", "FastAPI"].map((tech) => (
                            <label
                                key={tech}
                                className="flex items-center gap-2 text-sm text-gray-300"
                            >
                                <input
                                    type="checkbox"
                                    value={tech}
                                    checked={editTechnology.includes(tech)}
                                    onChange={(e) => {
                                        const { value, checked } = e.target

                                        if (checked) {
                                            setEditTechnology([...editTechnology, value])
                                        } else {
                                            setEditTechnology(
                                                editTechnology.filter((item) => item !== value)
                                            )
                                        }
                                    }}
                                />
                                {tech}
                            </label>
                        ))}
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
            ) : (
                <div className="mx-auto max-w-5xl px-6 py-12">

                    <div className="mb-8 inline-block text-sm text-gray-300 transition hover:text-white">
                        <Link
                            to="/projects"

                        >
                            ← Back to Projects
                        </Link>
                    </div> < br />
                    <div className="mb-8 inline-block text-sm text-gray-300 transition hover:text-white" >
                        <button
                            type="button"
                            onClick={(e) => {
                                setIsEditing(true)
                            }}
                        >
                            ← Edit
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
                                    A detailed workspace for everything related to
                                    this project.
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

                                <p className="mt-2 leading-6 text-2xl text-gray-300">
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                                    Tech Stack
                                </p>

                                <div className="mt-3 flex flex-wrap gap-3">
                                    {
                                        project.technology.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-md bg-black px-3 py-1.5 text-xs text-gray-300 ring-1 ring-gray-800"
                                            >
                                                {tech}
                                            </span>
                                        )
                                        )
                                    }
                                </div>
                            </div>

                        </div>

                    </div>

                </div>)}
        </main>
    );
}

export default ProjectDetails;