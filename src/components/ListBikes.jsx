import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Modal, Row, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { url } from "../helpers/Url";
import CardBike from "./CardBike";

const ListBikes = () => {
  const getData = async () => {
    const response = await axios.get(url);
    return response;
  };

  const [list, setList] = useState([]);
  const [updateList, setUpdateList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleChangeModal = ({ target }) => {
    setDataModal({
      ...dataModal,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(url + dataModal.id, dataModal);
    if (response.status === 200) {
      Swal.fire(
        "Guardado!",
        `${response.data.name} se ha actualizado`,
        "success"
      );
      handleCloseModal();
      setUpdateList(!updateList);
    } else {
      Swal.fire(
        "Error!",
        "No se pudo editar",
        "error"
      );
    }
  };

  useEffect(() => {
    getData().then((response) => {
      setList(response.data);
    });
  }, [updateList]);

  return (
    <Container fluid className="mt-5">
      <Row>
        {list.map((bike) => (
          <CardBike
            bike={bike}
            key={bike.id}
            setUpdateList={setUpdateList}
            updateList={updateList}
            handleCloseModal={handleCloseModal}
            handleOpenModal={handleOpenModal}
            setDataModal={setDataModal}
          />
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editando</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Nombre:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={dataModal.name}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="brand">Marca:</Form.Label>
              <Form.Control
                type="text"
                name="brand"
                value={dataModal.brand}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="year">Modelo:</Form.Label>
              <Form.Control
                type="number"
                name="year"
                value={dataModal.year}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="price">Precio:</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={dataModal.price}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="image">Url Imagen:</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={dataModal.image}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" type="reset" onClick={handleCloseModal}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleSubmit} type="submit">
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default ListBikes;
