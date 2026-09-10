import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";
import { Link } from "react-router-dom";
function ProjectDetails() {
    const { id } = useParams()
    const { projects } = useContext(ProjectsContext)
    const project = projects.find((project) => project.id === id)
    return (
        <main className="min-h-[calc(100vh-81px)] bg-black text-white">


            <div className="mx-auto max-w-5xl px-6 py-12">

                <button
                    type="button"
                    className="mb-8 text-sm text-gray-500 transition hover:text-white"
                >
                    <Link
                        to="/projects"
                        className="mb-8 inline-block text-sm text-gray-300 transition hover:text-white"
                    >
                        ← Back to Projects
                    </Link>
                </button>

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
                                {project.description}
                            </p>

                            <p className="mt-2 text-sm leading-6 text-gray-300">
                                Project information, goals, technologies,
                                tasks and progress will eventually appear here.
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                                Tech Stack
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
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

            </div>
        </main>
    );
}

export default ProjectDetails;