import "dotenv/config"
import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import projectRoutes from "./routes/projectRoutes.js"


const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use("/api/auth" , authRoutes)
app.use("/api/projects" , projectRoutes)


app.get("/", (req, res) => {
    res.json({
        message: "DevBoard API is running"
    })
})

app.post("/api/test", (req, res) => {
    console.log(req.body)

    res.json({
        message: "Data received",
        data: req.body
    })
})


connectDB()

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})