import { Button } from "bootstrap";
import React from "react";
import { Form } from "react-bootstrap";

const AddNewBike = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label for="name">Nombre:</Form.Label>
        <Form.Control type="text" name="name" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label for="brand">Marca:</Form.Label>
        <Form.Control type="text" name="brand" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label for="model">Modelo/Año:</Form.Label>
        <Form.Control type="number" name="model" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label for="price">Precio:</Form.Label>
        <Form.Control type="number" name="price" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label for="image">Url Imagen</Form.Label>
        <Form.Control type="text" name="image" required />
      </Form.Group>
      <Button type="submit" className="btn btn-light" />
    </Form>
  );
};

export default AddNewBike;
