import {Offcanvas, Stack, } from "react-bootstrap"
import { useShoppingCart } from "../context/ventaCarritoContext"
import { CarritoItem } from "./carritoItem"
import { FormatoMoneda } from "../utilities/formatoMoneda"
import  productsE from "../data/products.json"


type compraCarritoProps ={
    estaAbierto:boolean
}

export function CompraCarrito({estaAbierto}:compraCarritoProps){

    const {cerrarCarrito, itemsCarrito} =useShoppingCart()

    return (
    <Offcanvas show={estaAbierto} onHide={cerrarCarrito} placement="end" >
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Carrito de Compra</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {itemsCarrito.map(item=>(
                <CarritoItem key={item.id}{...item}/>))}

                <div className="ms-auto fw-blod fs-5">
                    Total {FormatoMoneda(itemsCarrito.reduce((total, CarritoItem)=>{
                        const item = productsE.find(i=> i.id===CarritoItem.id)
                        return total +( item?.precio || 0 )* CarritoItem.cantidad
                    },0))}

                </div>

            </Stack>
        </Offcanvas.Body>


    </Offcanvas>
    )
}