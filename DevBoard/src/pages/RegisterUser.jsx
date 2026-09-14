import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../api/authApi"

function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        setError("")
        setLoading(true)

        try {
            await registerUser({
                name,
                email,
                password
            })

            navigate("/login")
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <div className="mx-auto flex min-h-screen max-w-md items-center px-6">
                <div className="w-full">

                    <div className="mb-8">
                        <p className="mb-2 text-sm font-medium text-indigo-400">
                            DEVBOARD
                        </p>

                        <h1 className="text-3xl font-bold">
                            Create your account
                        </h1>

                        <p className="mt-2 text-gray-400">
                            Start managing your developer projects.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5 rounded-2xl border border-gray-800 bg-gray-950 p-6"
                    >
                        <div>
                            <label className="mb-2 block text-sm text-gray-300">
                                Name
                            </label>

                            <input
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                required
                                className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-white outline-none focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-gray-300">
                                Email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                required
                                className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-white outline-none focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-gray-300">
                                Password
                            </label>

                            <input
                                type="password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                required
                                className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-white outline-none focus:border-indigo-500"
                            />
                        </div>

                        {error && (
                            <p className="text-sm text-red-400">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg bg-white px-4 py-3 font-medium text-black transition hover:bg-gray-200 disabled:opacity-50"
                        >
                            {loading
                                ? "Creating account..."
                                : "Create account"}
                        </button>

                        <p className="text-center text-sm text-gray-400">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-white hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                    </form>

                </div>
            </div>
        </main>
    )
}

export default Register