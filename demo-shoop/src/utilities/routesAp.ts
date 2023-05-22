export interface PublicRoutes {
    default:string
    login:string
    home:string
    category:string
    about:string
    store:string
    register:string

}
export interface AdminRoutes extends PublicRoutes{
    clients:string
    formProduct:string
}

export const clientRoutes: PublicRoutes={
    default:"/store",
    login:"/login",
    home:"/",
    category:"/categori",
    about:"/about",
    store:"/store",
    register:"/register"

}

export const adminRoute: AdminRoutes={
    ...clientRoutes,
    clients:"/clientes",
    formProduct:"/fromproduct"
}