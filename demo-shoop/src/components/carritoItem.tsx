import { useShoppingCart } from "../context/ventaCarritoContext"
import  productsE from "../data/products.json"
import {Stack, Button} from "react-bootstrap"
import { FormatoMoneda } from "../utilities/formatoMoneda"
import {BsXSquareFill} from "react-icons/bs"


type carritoItemsProps={
    id: number
    cantidad: number
}


export function CarritoItem ({id, cantidad}:carritoItemsProps){
    const{ eliminardelCarrito}= useShoppingCart()
    const item= productsE.find(i=> i.id===id)
    if(item == null) return null
   



    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} style={{width:"125px", height:"75px", objectFit:"cover"}}/>
            <div className="me-auto">
                <div>{item.nombre}{cantidad >1 && <span className="text-muted" style={{fontSize:".65em"}}>x{cantidad} </span>}
                </div>

            </div>
            <div className="text-muted" style={{fontSize:".75rem"}}>
                {FormatoMoneda(item.precio)}

            </div>
            <div>{FormatoMoneda(item.precio*cantidad)}</div>
            <Button variant="outline-danger" size="sm" onClick={()=>eliminardelCarrito(item.id)}>
            <BsXSquareFill/>
            </Button>
        </Stack>

    )
}