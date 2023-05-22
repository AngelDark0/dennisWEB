
import productItems from "../../../../data/products.json"
import {Row, Col } from "react-bootstrap"
import { ProductItemAdmin } from "../components/productsItem"
export default function StoreAdmin (){
    return (
        <>
         <h1 style={{textAlign:"center", marginTop:".65em", color:"white"}}>PRODUCTOS</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {productItems.map(item=>(
                <Col key={item.id}><ProductItemAdmin {...item} />
                 </Col>
            ))}

        </Row>
        </>
       
    )
}