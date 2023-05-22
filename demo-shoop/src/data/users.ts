

export interface User{
    id: number
    nombre:string
    apellido:string
    usuario:string
    Contraseña:string
    tipoU:string
    
}


   export const  usuarios:User[]=[
    {id: 1, nombre: 'Demo', apellido: 'Dark', usuario: 'Demo01', Contraseña: 'Demo01',tipoU:'A'},

{id: 2, nombre: 'Cliente', apellido: 'cliente', usuario: 'cliente01', Contraseña: 'cliente01',tipoU:'C'},

{id: 3, nombre: 'Cliente2', apellido: 'cliente2', usuario: 'cliente02', Contraseña: 'cliente02',tipoU:'C'},

{id: 4, nombre: 'Cliente3', apellido: 'cliente3', usuario: 'cliente03', Contraseña: 'cliente04',tipoU:'C'}]
