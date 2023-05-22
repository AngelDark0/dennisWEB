import { useState } from "react"
import { ProductItem } from "../../../../components/ProductItem"
import { SelectCategori } from "../../../../components/selectCategori"
import productItems from "../../../../data/products.json"
import { Row, Col, Container } from "react-bootstrap"


export default function Categori() {
    const[categoria, setCategoria]= useState("")
    const handelChangevalue = (value: string) => {
        setCategoria(value)

    }
    return (

        <Container style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1 >
                Categoria
            </h1>
            <SelectCategori  onChangeSearchValue={handelChangevalue} />





            <Row md={2} xs={1} lg={3} className="g-3">
                {productItems.map(item => (item.categoria === categoria ?
                    <Col key={item.id}><ProductItem {...item} />
                    </Col>
                    : ""))}

            </Row>
        </Container>
    )
}