import axios from "axios";

export async function logInService(usuario:string, contrasenia: string){
    try {
        const res= await axios.post('http://127.0.0.1:3900/api/users/login', {usuario, contrasenia})
        console.log(res.data)
        return res.data
        
    } catch (error) {
        console.log(error)
    }



}