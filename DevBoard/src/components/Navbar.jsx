import {Link } from "react-router-dom"



function Navbar() {
    return (
        <nav className="border-b border-gray-800 bg-black">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                <Link
                    to="/"
                    className="text-lg font-bold text-white"
                >
                    DEVBOARD
                </Link>

                <div className="flex gap-6">
                    <Link
                        to="/"
                        className="text-sm text-gray-400 hover:text-white"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/projects"
                        className="text-sm text-gray-400 hover:text-white"
                    >
                        Projects
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
