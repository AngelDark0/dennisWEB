import { usuarios} from "../data/users"
import { Container, Table } from "react-bootstrap";


export function DataTable(){
    

    return (
        <Container style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
            <h2>
                Lista de Clientes Registrados
            </h2>
             <Table  striped bordered hover variant="dark" style={{borderRadius:"5em"}}>
             
             <thead>
                
                    
 
                  
                 <tr>
                     <th>Id</th>
                     <th>Nombre</th>
                     <th>Usuario</th>
                     <th>Apellido</th>
                     <th>Tipo Usuario</th>
                 
 
                 </tr>
             </thead>
             <tbody>
             {usuarios.map(item => (item.tipoU==="C"?
                 <tr key={item.id}>
                     <td>{item.id}</td>
                     <td>{item.nombre}</td>
                     <td>{item.apellido}</td>
                     <td>{item.usuario}</td>
                     <td>{item.tipoU ==="C"? "Cliente" : ""}</td>
                 </tr>
                 :""))}
 
             </tbody>
                   
                 <tfoot>
 
                 </tfoot>
 
         </Table>

        </Container>
       
    )
  
}