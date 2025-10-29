const user = [
    {
        username: "Superadmin",
        password: process.env.INIT_ADMIN_PASSWORD,
        role: {
            name: "Superadmin",
        }
    }
]

// use commonjs module because this is outside of next js scope
export default {
    user
}