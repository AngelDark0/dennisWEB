import { Button, Modal } from "react-bootstrap";
import { ProductForm } from "./formProducts";
import { ReactNode } from "react";

interface ModalType {
    children?: ReactNode;
    show: boolean;
    handleClose: () => void;
  }

export function ModalForm(props:ModalType){


    return (
        <>
          
    
          <Modal
            show={props.show}
            onHide={props.handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
             
            </Modal.Header>
            <Modal.Body>
                <ProductForm/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.handleClose}>
                Close
              </Button>
              
            </Modal.Footer>
          </Modal>
        </>
      );
}