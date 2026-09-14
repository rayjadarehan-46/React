import { useState } from "react"
import { useDispatch } from "react-redux"

import { createProjectAsync } from "../features/projects/ProjectSlice"

function AddProject() {
    const [projectName, setProjectName] = useState("")
    const [description, setDescription] = useState("")
    const [technology, setTechnology] = useState([])

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch(
            createProjectAsync({
                name: projectName,
                description,
                technology
            })
        )

        setProjectName("")
        setDescription("")
        setTechnology([])
    }

    const handleTechnologyChange = (event) => {
        const { value, checked } = event.target

        if (checked) {
            setTechnology((currentTechnology) => [
                ...currentTechnology,
                value
            ])
        } else {
            setTechnology((currentTechnology) =>
                currentTechnology.filter(
                    (tech) => tech !== value
                )
            )
        }
    }

    const technologies = [
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
    ]

    return (
        <section className="mb-10 bg-black text-white">
            <div className="rounded-xl border border-gray-200 bg-black p-6 shadow-sm">

                <h2 className="mb-1 text-2xl font-bold text-white">
                    Add a new project
                </h2>

                <p className="mb-6 text-sm text-white">
                    Keep track of something you're building.
                </p>

                <form
                    id="add-project-form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <input
                        value={projectName}
                        onChange={(event) =>
                            setProjectName(event.target.value)
                        }
                        type="text"
                        required
                        placeholder="e.g. My Portfolio"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                    />

                    <input
                        value={description}
                        onChange={(event) =>
                            setDescription(event.target.value)
                        }
                        type="text"
                        required
                        placeholder="Project description"
                        className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {technologies.map((tech) => (
                            <label
                                key={tech}
                                className="flex items-center gap-2 text-sm text-gray-300"
                            >
                                <input
                                    type="checkbox"
                                    value={tech}
                                    checked={technology.includes(tech)}
                                    onChange={handleTechnologyChange}
                                    className="rounded border-gray-700 bg-gray-900"
                                />

                                {tech}
                            </label>
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="mt-4 rounded-lg bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-orange-300"
                    >
                        + Add Project
                    </button>
                </form>

            </div>
        </section>
    )
}

export default AddProject