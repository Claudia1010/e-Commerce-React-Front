import React, { useState, useContext } from "react";
import { Card, ListGroup, Modal } from "react-bootstrap";
import { DataContext } from "../../context/DataProvider";

const ProductSearch = (props) => {
  const { id, name, artist, year, price, description, image } = props;

  const value = useContext(DataContext);
  const addCart = value.addCart;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <ListGroup.Item key={id} onClick={handleShow}>
          {name}  
       </ListGroup.Item>

      <Modal className="modalPrincipalBody" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modalHeader">{name}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modalBody">
          <Card>
            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                {artist}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">{year}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                € {price}
              </Card.Subtitle>
              <Card.Text>{description}</Card.Text>
              <button className="btn btn-danger" onClick={() => addCart(id, 1)}>
                Add to Cart
              </button>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductSearch;
