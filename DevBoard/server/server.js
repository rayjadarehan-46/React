import "dotenv/config"
import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import projectRoutes from "./routes/projectRoutes.js"


const app = express()

const PORT = process.env.PORT || 5000


const allowedOrigins = [
  'http://localhost:5173', // local host 
  'https://devboard-api-lcj0.onrender.com' // Live React link 
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/projects", projectRoutes)


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

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`)
})
