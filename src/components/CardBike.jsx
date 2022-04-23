import axios from "axios";
import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { url } from "../helpers/Url";

const CardBike = ({
  bike,
  setUpdateList,
  updateList,
  handleCloseModal,
  handleOpenModal,
  setDataModal,
}) => {
  const handleDelete = async () => {
    Swal.fire({
      title: `¿Quierés eliminar ${bike.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",

    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(url + bike.id).then((response) => {
          if (response.status === 200) {
            Swal.fire(
              "Eliminado exitosamente",
              `Eliminaste ${bike.name}`,
              "success"
            );
            setUpdateList(!updateList);
          } else {
            Swal.fire("Error!", "No se pudo eliminar", "error");
          }
        });
      }
    });
  };

  const handleEdit = async () => {
    handleOpenModal();
    setDataModal(bike);
  };

  return (
    <div className="col-sm-4 mb-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={bike.image}
          className="img-fluid img-thumbnail"
        />
        <Card.Body>
          <Card.Title>
            {bike.name} - ID: {bike.id}
          </Card.Title>
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
          <Button className="btn btn-secondary" onClick={handleEdit}>
            Editar
          </Button>
          <Button className="btn btn-dark" onClick={handleDelete}>
            Eliminar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardBike;
