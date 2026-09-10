import { useContext } from "react"
import { ProjectsContext } from "../context/ProjectsContext"
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
function Dashboard() {
    const { projects } = useContext(ProjectsContext)
    return (
        <main className="min-h-[calc(100vh-81px)] bg-black text-white">
            <div className="mx-auto max-w-6xl px-6 py-12">

                <div className="mb-10">
                    <p className="mb-2 text-sm font-medium text-indigo-400">
                        DEVBOARD
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Your developer workspace.
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
                        Keep track of what you're building, what you're learning,
                        and what you want to ship next.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    <article className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
                        <p className="text-sm text-gray-500">
                            Total Projects
                        </p>

                        <p className="mt-3 text-4xl font-bold">
                            {projects.length}
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                            Things you're currently building
                        </p>
                    </article>

                    <article className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
                        <p className="text-sm text-gray-500">
                            In Progress
                        </p>

                        <p className="mt-3 text-4xl font-bold">
                            {projects.filter((project) => project.status === "In Progress").length}
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                            Projects currently underway
                        </p>
                    </article>

                    <article className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
                        <p className="text-sm text-gray-500">
                            Completed
                        </p>

                        <p className="mt-3 text-4xl font-bold">
                            {projects.filter((project) => project.status === "Completed").length}
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                            Projects you've shipped
                        </p>
                    </article>

                </div>
                <section className="mt-12">
                    <div className="mb-5 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-indigo-400">YOUR WORK</p>
                            <h2 className="mt-1 text-2xl font-bold">Recent Projects</h2>
                        </div>

                        <Link
                            to="/projects"
                            className="text-sm font-medium text-gray-400 hover:text-white"
                        >
                            View all →
                        </Link>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                         {projects.slice(-3).map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />

                    ))}
                    </div>
                </section>

            </div>
        </main>
    );
}

export default Dashboard;