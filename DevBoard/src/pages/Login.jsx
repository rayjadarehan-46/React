import { loginUserAsync } from "../features/auth/AuthSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import SoftAurora from "../components/SoftAurora"


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault()

        const result = await dispatch(
            loginUserAsync({
                email,
                password
            })
        )

        if (loginUserAsync.fulfilled.match(result)) {
            navigate("/projects")
        }
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-black text-white">
            <div className="pointer-events-none absolute inset-0">
                <SoftAurora
                    speed={0.8}
                    scale={1}
                    brightness={0.45}
                    color1="#8b5cf6"
                    color2="#4f46e5"
                    noiseFrequency={2}
                    noiseAmplitude={0.5}
                    bandHeight={0.45}
                    bandSpread={1}
                    octaveDecay={0.01}
                    layerOffset={0}
                    colorSpeed={1}
                    enableMouseInteraction
                    mouseInfluence={0.08}
                />
            </div>
            <div className="relative z-10">
                <div className="mx-auto flex min-h-screen max-w-md items-center justify-center px-6 py-12">
                    <section className="w-full">
                        <div className="mb-8 text-center">
                            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
                                DevBoard
                            </p>

                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Welcome back
                            </h1>

                            <p className="mt-3 text-sm leading-6 text-gray-400">
                                Sign in to access your developer workspace.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            id="Login-form"
                            className="rounded-2xl border border-gray-800 bg-gray-950 p-6 shadow-2xl sm:p-8"
                        >
                            <div className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-gray-200"
                                    >
                                        Email address
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        required
                                        autoComplete="email"
                                        className="w-full rounded-lg border border-gray-800 bg-black px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                    />
                                </div>

                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium text-gray-200"
                                        >
                                            Password
                                        </label>

                                        <button
                                            type="button"
                                            className="text-xs font-medium text-indigo-400 transition hover:text-indigo-300"
                                        >
                                            Forgot password?
                                        </button>
                                    </div>

                                    <input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        required
                                        autoComplete="current-password"
                                        className="w-full rounded-lg border border-gray-800 bg-black px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-950"
                                >
                                    Sign in
                                </button>
                            </div>

                            <div className="my-6 flex items-center gap-4">
                                <div className="h-px flex-1 bg-gray-800" />
                                <span className="text-xs text-gray-600">
                                    DEVBOARD
                                </span>
                                <div className="h-px flex-1 bg-gray-800" />
                            </div>

                            <p className="text-center text-sm text-gray-500">
                                New to DevBoard?{" "}
                                <Link
                                    to="/register"
                                    className="font-medium text-indigo-400 transition hover:text-indigo-300"
                                >
                                    Create an account
                                </Link>
                            </p>
                        </form>
                    </section>
                </div>
            </div>

        </main>
    )
}

export default Login