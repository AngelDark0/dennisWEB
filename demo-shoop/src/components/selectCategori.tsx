import { Form } from "react-bootstrap";


export function SelectCategori({ onChangeSearchValue }: { onChangeSearchValue: (value: string) => void }) {
    return (
        <Form id="form" style={{width:"300px" }}>
            <Form.Group className="mb-3" controlId="search" >
                <Form.Control type="text" placeholder="Ingrese la categoria a buscar" onChange={(e) => { onChangeSearchValue(e.target.value) }}>

                </Form.Control>


            </Form.Group>


        </Form>

    )

}
