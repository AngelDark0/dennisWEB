import { Form, Container, Button, Nav } from "react-bootstrap";
import {BsFillPersonFill} from "react-icons/bs"
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { logInService } from "../services/loginService";
import { useAut } from "../context/autheticationContext";
import { usuarios } from "../data/users";


export default function Login (){
  const [usuario, setUsuario]=useState('')
    const [password, setPassword]=useState('')
    const {user, setUser}=useAut()
    

    const login=async (user:any, password:any) =>{ 
      
      const res= await logInService(user, password)
        if (!res.error)
        
         {
           setUser({nombre:res.nombre, apellido:res.apellido, usuario:res.usuario, tipoU:res.tipoU})
          

            alert('Login Correcto')
        }else[
            alert('Login Incorrecto')
        ]
        
      

      }


 
 
  

    return (
         <Container >
       
            
           
           
            
            <Form style={{ maxWidth:"300px",margin:"0 auto", textAlign :"center"}}
                onSubmit={ev=>{
                    ev.preventDefault();
                    login(user, password);
                }}>
                <Form.Group style={{display:"flex", justifyContent:"center"}}>
                <BsFillPersonFill style={{ width: "8rem",
                height: "8rem"}}></BsFillPersonFill>

                </Form.Group>
               

                <Form.Text >Ingrese los datos</Form.Text>

                <Form.Group className="mb-3">
                <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Usuario" name="usuario" onChange={ev=> setUsuario(ev.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <div>
                   
                    <Form.Control  type="password" size="lg" placeholder="Contraseña" name="password" onChange={ev=> setPassword(ev.target.value)}></Form.Control>

                    </div>
                    
                   
                </Form.Group >

                <Button  variant="primary" size="lg" type="submit" style={{width:"100%"}}>
                    LogIn
                </Button>
                <br />
                <Form.Text style={{textAlign:"center"}}>
                    <Nav className="me-auto">
                        <Nav.Link to={"/register"} as={NavLink}>
                            <strong style={{color:"black"}}>Registar</strong>

                        </Nav.Link>

                    </Nav>
                </Form.Text>
                
            </Form>
        </Container>



    )
    
}
