import { useState } from "react";
import { ProjectsContext } from "../context/ProjectsContext";
import { useContext } from "react";


function AddProject() {
    const [projectName, setProjectName] = useState("")
    const [description, setDescription] = useState("")
    const [technology, setTechnology] = useState([])
    const { handleAddProject } = useContext(ProjectsContext)
    const handleSubmit = (e) => {
        e.preventDefault()

        handleAddProject(projectName, description, technology)
        setProjectName("")
        setDescription("")
        setTechnology("")
    }
    const handleTechnologyChange = (e) => {
        const {value , checked } = e.target 
        if(checked){
            setTechnology([...technology ,value ])
        }else {
            setTechnology(
                technology.filter((tech)  => tech !== value)
            )
        }
    }

    return (
        <section className="mb-10 bg-black text-white">
            <div className="rounded-xl border border-gray-200 bg-black p-6 shadow-sm">

                <h2 className="mb-1 text-2xl font-bold text-white">
                    Add a new project
                </h2>

                <p className="mb-6 text-sm text-white">
                    Keep track of something you're building.
                </p>
                <form id="add-project-form" onSubmit={handleSubmit}>
                    <input
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        type="text"
                        required
                        placeholder="e.g. My Portfolio"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                    />
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        required
                        placeholder="Project description"
                        className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        <label className="flex items-center gap-2 text-sm text-gray-300">
                            <input
                                type="checkbox"
                                value="HTML"
                                className="rounded border-gray-700 bg-gray-900"
                                onChange={handleTechnologyChange}
                            />
                            HTML
                        </label>

                        <label className="flex items-center gap-2 text-sm text-gray-300">
                            <input
                                type="checkbox"
                                value="CSS"
                                className="rounded border-gray-700 bg-gray-900"
                                onChange={handleTechnologyChange}
                            />
                            CSS
                        </label>

                        <label className="flex items-center gap-2 text-sm text-gray-300">
                            <input
                                type="checkbox"
                                value="Tailwind CSS"
                                className="rounded border-gray-700 bg-gray-900"
                                onChange={handleTechnologyChange}
                            />
                            Tailwind CSS
                        </label>

                        <label className="flex items-center gap-2 text-sm text-gray-300">
                            <input
                                type="checkbox"
                                value="JavaScript"
                                className="rounded border-gray-700 bg-gray-900"
                                onChange={handleTechnologyChange}
                            />
                            JavaScript
                        </label>

                        <label className="flex items-center gap-2 text-sm text-gray-300">
                            <input
                                type="checkbox"
                                value="React"
                                className="rounded border-gray-700 bg-gray-900"
                                onChange={handleTechnologyChange}
                            />
                            React
                        </label>

                        <label className="flex items-center gap-2 text-sm text-gray-300">
                            <input
                                type="checkbox"
                                value="Python"
                                className="rounded border-gray-700 bg-gray-900"
                                onChange={handleTechnologyChange}
                            />
                            Python
                        </label>

                        <label className="flex items-center gap-2 text-sm text-gray-300">
                            <input
                                type="checkbox"
                                value="FastAPI"
                                className="rounded border-gray-700 bg-gray-900"
                                onChange={handleTechnologyChange}
                            />
                            FastAPI
                        </label>
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
    );
}

export default AddProject;