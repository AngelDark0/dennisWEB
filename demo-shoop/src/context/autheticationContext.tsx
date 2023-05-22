import { createContext, useContext, useState } from "react"
export enum TipoU {A="A", C="C", D="Default"}

interface User {
   nombre: string
   apellido: string
   usuario: string
   tipoU: TipoU
}

interface typeUser {

   user: User,
   setUser: (user: User) => void
}

const typeUsuario: typeUser = {
   user: {
      nombre: "",
      apellido: "",
      usuario: "",
      tipoU: TipoU.D
   },
   setUser: () => { }
}


export const AutContext = createContext<typeUser>(typeUsuario)
export function AutProvider({ children }: { children: JSX.Element | JSX.Element[] }) {

   const [user, setUser] = useState<User>(typeUsuario.user)
   return <AutContext.Provider value={{ user, setUser }} >
      {children}

   </AutContext.Provider>
}

//obtener datos

export const useAut=()=>{
   return useContext(AutContext)
}
