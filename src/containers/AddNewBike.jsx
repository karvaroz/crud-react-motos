import { Container, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { url } from "../helpers/Url";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewBike = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    brand: "",
    year: "",
    price: "",
    image: "",
  });

  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(url, data)
      .then((response) => {
        Swal.fire(
          "Agregado exitosamente",
          `Registro de ${response.data.name}`,
          "success"
        );
        navigate("/");
      })
      .catch((err) => {
        Swal.fire("Error", `No se pudo guardar ${response.data.name}`, "error");
        console.log(err);
      });
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <h1>AGREGAR NUEVA MOTO</h1>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Nombre:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="brand">Marca:</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            value={data.brand}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="model">Modelo/Año:</Form.Label>
          <Form.Control
            type="number"
            name="year"
            value={data.year}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="price">Precio:</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={data.price}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="image">Url Imagen</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={data.image}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <button className="btn btn-primary">Enviar</button>
      </Form>
    </Container>
  );
};

export default AddNewBike;
