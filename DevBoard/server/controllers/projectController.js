import Project from "../models/Project.js"

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({
            owner: req.user
        }).sort({ createdAt: -1 })

        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch projects"
        })
    }
}

export const createProject = async (req, res) => {
    try {
        const project = await Project.create({
            ...req.body,
            owner: req.user
        })

        res.status(201).json(project)
    } catch (error) {
        res.status(500).json({
            message: "Failed to create project",
            error: error.message
        })
    }
}

export const updateProject = async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            {
                _id: req.params.id,
                owner: req.user
            },
            req.body,
            {
                new: true,
                runValidators: true
            }
        )

        if (!project) {
            return res.status(404).json({
                message: "Project not found"
            })
        }

        res.status(200).json(project)
    } catch (error) {
        res.status(500).json({
            message: "Failed to update project",
            error: error.message
        })
    }
}

export const deleteProject = async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({
            _id: req.params.id,
            owner: req.user
        })

        if (!project) {
            return res.status(404).json({
                message: "Project not found"
            })
        }

        res.status(200).json({
            message: "Project deleted"
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete project"
        })
    }
}