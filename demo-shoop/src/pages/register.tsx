import { Button, Container , Form} from "react-bootstrap"
import { useState } from "react";
import {usuarios, User} from "../data/users"






export function Register(){
    //const[clientes, setCleintes]=useState<User[]>([];)
    const[nombre, setNombre]=useState('')
    const [apellido, setApellido]=useState('')

    const[user, setUser]=useState('')
    const [password, setPassword]=useState('')


const register=(nombre:string, apellido:string, user:string, password:string)=>{
    const lastID= usuarios[usuarios.length -1].id
    
    const id:number=lastID+1
    const tipoU="C"
    const usuario= user
    const Contraseña=password

    const demoUsuario:User={id,nombre,apellido,usuario,Contraseña,tipoU}
    usuarios.push(demoUsuario)
    console.log(usuarios)
    


}


    return (
        <Container style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <Container>
               
                    <img src="../assets/images.jpg" width="500" height="600" />
                

            </Container>
             <Container style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1> Registro</h1>
            
            <Form style={{ maxWidth:"300px",margin:"0 auto", textAlign :"center"}}
                onSubmit={ev=>{
                    ev.preventDefault();
                    register(nombre,apellido,user,password);
                }}>
               
               

                <Form.Text >Ingrese los datos</Form.Text>
                <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Nombre" name="nombre" onChange={ev=> setNombre(ev.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <div>
                   
                    <Form.Control  type="text" size="lg" placeholder="Apellido" name="apellido" onChange={ev=> setApellido(ev.target.value)}></Form.Control>

                    </div>
                    
                   
                </Form.Group >

                <Form.Group className="mb-3">
                <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Usuario" name="user" onChange={ev=> setUser(ev.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <div>
                   
                    <Form.Control  type="password" size="lg" placeholder="Contraseña" name="password" onChange={ev=> setPassword(ev.target.value)}></Form.Control>

                    </div>
                    
                   
                </Form.Group >

                <Button  variant="primary" size="lg" type="submit" style={{width:"100%"}}>
                    Registrar
                </Button>
                <br />
               
                
            </Form>


        </Container>

        </Container>
       
        
    )
}