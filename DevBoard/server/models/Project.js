import mongoose from "mongoose"

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        status: {
            type: String,
            enum: ["Planning", "In Progress", "Completed"],
            default: "Planning"
        },

        description: {
            type: String,
            required: true,
            trim: true
        },

        technology: {
            type: [String],
            default: []
        },

        githubUrl: {
            type: String,
            default: ""
        },

        liveUrl: {
            type: String,
            default: ""
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Project = mongoose.model("Project", projectSchema)

export default Project