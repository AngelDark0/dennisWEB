import {Card, Button} from "react-bootstrap"
import { FormatoMoneda } from "../utilities/formatoMoneda"
import { useShoppingCart } from "../context/ventaCarritoContext"
type ProductItemProps={
    id: number,
    nombre: string,
    cod:string,
    precio: number,
    categoria:string,
    imgUrl: string
}

export function ProductItem({id,nombre, cod, precio,categoria,imgUrl}: ProductItemProps){

    //cantidad

    const {getItemCantidad, incrementarCantidad, disminuirCantidad,eliminardelCarrito}=useShoppingCart()
    const cantidad =getItemCantidad(id)


    return (
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
                    {cantidad===0 ?(
                        <Button className="w-100" onClick={()=>incrementarCantidad(id)}>+ Agregar al Carrito</Button>

                    ): (<div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
                            <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}}> 
                            <Button onClick={()=>disminuirCantidad(id)}>-</Button>
                            <div>

                                <span className="fs-3">{cantidad}</span> En el Carrito
                            </div>
                            <Button onClick={()=>incrementarCantidad(id)}>+</Button>
                            </div> 
                            <Button onClick={()=>eliminardelCarrito(id)} variant="danger" size="sm">Eliminar</Button>
                        </div>
                        )
                    }

                </div>
             </Card.Body>

        </Card>
       
    )
}