import { useState } from "react";
import { ProjectsContext } from "../context/ProjectsContext";
import { useContext } from "react";


function AddProject() {
    const [projectName, setProjectName] = useState("")
    const [description, setDescription] = useState("")
    const [technology, setTechnology] = useState("")
    const { handleAddProject } = useContext(ProjectsContext)

    return (
        <section className="mb-10 bg-black text-white">
            <div className="rounded-xl border border-gray-200 bg-black p-6 shadow-sm">

                <h2 className="mb-1 text-2xl font-bold text-white">
                    Add a new project
                </h2>

                <p className="mb-6 text-sm text-white">
                    Keep track of something you're building.
                </p>

                <input
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    type="text"
                    placeholder="e.g. My Portfolio"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="Project description"
                    className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
                <select
                    value={technology}
                    onChange={(e) => setTechnology(e.target.value)}
                    className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                >
                    <option value="">Select technology</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="Tailwind CSS">Tailwind CSS</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="React">React</option>
                    <option value="Python">Python</option>
                    <option value="FastAPI">FastAPI</option>
                </select>


                <button
                    type="button"
                    className="mt-4 rounded-lg bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-orange-300"
                    onClick={() => {
                        console.log("Clicked:", projectName)
                        handleAddProject(projectName)
                    }}
                >

                    + Add Project
                </button>

            </div>
        </section>
    );
}

export default AddProject;