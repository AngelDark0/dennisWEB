import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import {AdminRoutes, PublicRoutes, adminRoute, clientRoutes } from "../utilities/routesAp";
import { TipoU, useAut } from "../context/autheticationContext";


const allowedRoutes = {

	A: Object.values(adminRoute),
    C:[""],
    Default:[""]
	//public: Object.values(clientRoutes),
};

export default function RequireAuth() {
	const { user } = useAut();
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (user.tipoU!=TipoU.D) return navigate("/");
	}, [user.tipoU]);

	return allowedRoutes [user.tipoU].includes(location.pathname)
		? (
		<Outlet />
	) : (
		<Navigate replace to="/" />
	);
}