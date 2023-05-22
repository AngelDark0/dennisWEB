import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/home"
import Categori from "./pages/User/client/pages/categori"
import Store from "./pages/User/client/pages/strore"
import About from "./pages/about"
import Login from "./pages/login"
import { NavBar } from "./components/navBar"
import { ShoppingCartProvider } from "./context/ventaCarritoContext"
import { Cliente } from "./pages/User/admin/pages/Clientes"
import { Register } from "./pages/register"

import StoreAdmin from "./pages/User/admin/pages/products"
import { AutProvider } from "./context/autheticationContext"
import { adminRoute, clientRoutes } from "./utilities/routesAp"
import RequireAuth from "./components/RequiereAut"




function App() {


  return (
    <AutProvider>
      <ShoppingCartProvider>

        <NavBar />
        <Container className="mb-4">

          <Routes>

            <Route path={clientRoutes.home} element={<Home />} />
            <Route path={clientRoutes.category} element={<Categori />} />
            <Route path={clientRoutes.store} element={<Store />} />

            <Route path={clientRoutes.about} element={<About />} />
            <Route path={clientRoutes.login} element={<Login />} />
            <Route path={clientRoutes.register} element={<Register />} />
            <Route element={<RequireAuth/>}>
              <Route path={adminRoute.formProduct} element={<StoreAdmin />} />
              <Route path={adminRoute.clients} element={<Cliente />} />

            </Route>


          </Routes>

        </Container>


      </ShoppingCartProvider>



    </AutProvider>

  )
}

export default App
