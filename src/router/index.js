import {
    Home,
    Change,
    Server,
    Mine,
    Login
} from "@pages"



export const layoutRoutes = [
    {
        key: "/home",
        path: "/home",
        name: "首页",
        icon: "\ue604",
        component: Home,
        exact: true,
        meta: {
            requireAuth: false,
            flag:true
        }
    },
    {
        key: "/change",
        path: "/change",
        name: "换新机",
        icon: "\ue64f",
        component: Change,
        exact: true,
        meta: {
            requireAuth: false,
            flag:true
        }
    },
    {
        key: "/server",
        path: "/server",
        name: "服务站",
        icon: "\ue616",
        component: Server,
        exact: true,
        meta: {
            requireAuth: false,
            flag:true
        }
    },
    {
        key: "/mine",
        path: "/mine",
        name: "我的",
        icon: "\ue62f",
        component: Mine,
        exact: true,
        meta: {
            requireAuth: false,
            flag:true
        }
    },

]

export const noLayoutRoutes = [
    {
        key: "/login",
        path: "/login",
        name: "登陆",
        component: Login,
        exact: true,
        meta: {
            requireAuth: false
        }
    }
]

export const baseConfigRoutes = layoutRoutes.concat(noLayoutRoutes);