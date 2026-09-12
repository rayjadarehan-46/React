const API_URL = "http://localhost:3001/projects"

export const getProjects = async () => {
    const response = await fetch(API_URL)

    if (!response.ok) {
        throw new Error("Failed to fetch projects")
    }

    return response.json()
}

export const createProject = async (project) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(project)
    })

    if (!response.ok) {
        throw new Error("Failed to create project")
    }

    return response.json()
}

export const updateProject = async (id, updates) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updates)
    })

    if (!response.ok) {
        throw new Error("Failed to update project")
    }

    return response.json()
}

export const deleteProject = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })

    if (!response.ok) {
        throw new Error("Failed to delete project")
    }

    return id
}