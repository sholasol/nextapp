export const authConfig = {
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized({auth, request}){ //check session and request
            const isLoggedIn = auth?.user
            const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard")
        }
    }
}