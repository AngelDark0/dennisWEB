import { Button, Container, Form, Overlay } from "react-bootstrap";


export function ProductForm(){
    return(
      <Container>
        <Container style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h2>Formulario de Producto</h2>
            <Form 
            style={{ maxWidth:"300px",margin:"0 auto", textAlign :"center"}}
            >
              <Form.Text>
                Ingrese los datos
              </Form.Text>
              <Form.Group className="mb-3">

                  <Form.Label>Nombre del Producto</Form.Label>
                  <Form.Control type="text" size="lg" placeholder="Nombre del producto" name="nomproduct">

                  </Form.Control>

              </Form.Group>
               <Form.Group className="mb-3">

                  <Form.Label>Codigo Producto</Form.Label>
                  <Form.Control type="text" size="lg" placeholder="Codigo del producto" name="nomproduct">

                  </Form.Control>

              </Form.Group>
               <Form.Group className="mb-3">

                  <Form.Label>Precio</Form.Label>
                  <Form.Control type="text" size="lg" placeholder="Precio del producto" name="nomproduct">

                  </Form.Control>

              </Form.Group>
               <Form.Group className="mb-3">

                  <Form.Label>Categoría</Form.Label>
                  <Form.Control type="text" size="lg" placeholder="Categoria del producto" name="nomproduct">

                  </Form.Control>

              </Form.Group>
               
              <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Imagen del Producto</Form.Label>
                  <Form.Control type="file" />
                

              </Form.Group>
              <Button  variant="primary" size="lg" type="submit" style={{width:"100%"}}>
                    Guardar
                </Button>


            
            </Form>

        </Container>
        
        
      </Container>

    )
}