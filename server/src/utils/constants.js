export const WHITELIST_DOMAINS = [
    'https://hmweb3d.com',
    'http://localhost:5173',
    'http://192.168.1.43:5173'
]

export const TYPE_EMPLOYEE = {
    admin: "admin",
    user: "user",
    doctor: "doctor",
    administrative: "administrative",
    sales: "sales",
};

const apiRoot = process.env.BUILD_MODE === 'dev'
    ? "http://localhost:8082"
    : process.env.BUILD_MODE === 'production'
        ? "https://server.hmweb3d.com"
        : '';

export const BaseServer = apiRoot

