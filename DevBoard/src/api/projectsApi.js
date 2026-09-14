const API_URL = "http://localhost:5000/api/projects"

export const getProjects = async (token) => {
    const response = await fetch(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw new Error("Failed to fetch projects")
    }

    return response.json()
}

export const createProject = async (project, token) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(project)
    })

    if (!response.ok) {
        throw new Error("Failed to create project")
    }

    return response.json()
}

export const updateProject = async (id, updates, token) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updates)
    })

    if (!response.ok) {
        throw new Error("Failed to update project")
    }

    return response.json()
}

export const deleteProject = async (id, token) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw new Error("Failed to delete project")
    }

    return id
}