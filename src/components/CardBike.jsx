// import axios from "axios";
import { Button } from "bootstrap";
import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
// import Swal from "sweetalert2";

const CardBike = ({ bike }) => {
  
  return (
    <div className="col-sm-4 mb-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={bike.image}
          className="img-fluid img-thumbnail"
        />
        <Card.Body>
          <Card.Title>{bike.name}</Card.Title>
          <Card.Text>ID: {bike.id}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <strong>VENDEDOR: </strong>
            {bike.brand}
          </ListGroupItem>
          <ListGroupItem>
            <strong>MODELO: </strong>
            {bike.year}
          </ListGroupItem>
          <ListGroupItem>
            <strong>PRECIO: </strong>${bike.price}
          </ListGroupItem>
        </ListGroup>
        <Card.Body className="d-flex justify-content-evenly">
          <Button className="btn btn-secondary">
            Editar
          </Button>
          <Button className="btn btn-dark">
            Eliminar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardBike;
