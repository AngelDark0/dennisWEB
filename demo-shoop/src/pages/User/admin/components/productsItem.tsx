import {Card, Button} from "react-bootstrap"
import { FormatoMoneda } from "../../../../utilities/formatoMoneda"


import { useState } from "react"
import {ModalForm} from "./modalFrom"
type ProductItemProps={
    id: number,
    nombre: string,
    cod:string,
    precio: number,
    categoria:string,
    imgUrl: string
}

export function ProductItemAdmin({id,nombre, cod, precio,categoria,imgUrl}: ProductItemProps){

    //cantidad

    const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(!show);
  };

    return (
        <>
       
        <Card className="h-100">
            <Card.Img variant="top" src={imgUrl} height="200px" style={
                {
                    objectFit:"cover"
                }
            }/>
             <Card.Body className="d.flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{nombre}</span>
                    <span className="ms-2 text-muted">{FormatoMoneda(precio)}
                    </span>
                </Card.Title>
                <div className="mt-auto">
                    
                   <div className="d-flex justify-content-evenly align-items-baseline mb-3" style={{gap:".5rem"}}>
                           
                            <Button  variant="danger" size="sm">Eliminar</Button>
                            <Button onClick={handleClose} variant="info" size="sm" type="submit">Editar</Button>
                        </div>
                       
                       

                </div>
             </Card.Body>

        </Card>
        <ModalForm show={show} handleClose={handleClose}></ModalForm>
       

       
        </>
       
    )
}