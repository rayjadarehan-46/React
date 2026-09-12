import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../features/auth/AuthSlice"
import {  useNavigate } from "react-router-dom"

function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user, isAuthenticated } = useSelector((state) => state.auth)
    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    }
    return (
        <nav className="border-b border-gray-800 bg-black">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

                <Link
                    to="/"
                    className="text-lg font-bold text-white"
                >
                    DEVBOARD
                </Link>

                <div className="flex items-center gap-6">

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

                    {isAuthenticated ? (
                        <>
                            <span className="text-sm text-gray-400">
                                {user?.email}
                            </span>

                            <button
                                onClick={handleLogout}
                                className="text-sm text-gray-400 hover:text-white"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="text-sm text-gray-400 hover:text-white"
                        >
                            Login
                        </Link>
                    )}

                </div>
            </div>
        </nav>
    )
}

export default Navbar
