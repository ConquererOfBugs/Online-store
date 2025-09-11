import {ADMIN_ROUTE, BACKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"
import Admin from "./pages/Admin" 
import Basket from "./pages/Basket" 
import Auth from "./pages/Auth" 
import DevicePage from "./pages/DevicePage" 
import Shop from "./pages/Shop" 
import login from "./pages/Login" 



export const AuthRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    
    {
        path: BACKET_ROUTE,
        Component: Basket
    },
    
]

export const PubicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },

    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    
    {
        path: DEVICE_ROUTE + "/:id",
        Component: DevicePage
    },
    
    {
        path: "/loginn",
        Component: login
    },
]