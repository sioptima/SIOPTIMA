const role = [
    "ADMIN",
    "OPERATOR",
    "HRD"
]

const user = [
    {
        username: process.env.INIT_ADMIN_USERNAME || "admin",
        password: process.env.INIT_ADMIN_PASSWORD || "admin123",
        role: "ADMIN"
    }
]

export {
    user,
    role
}