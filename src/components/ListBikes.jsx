import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { url } from "../helpers/Url";
import CardBike from "./CardBike";

const ListBikes = () => {
  const [list, setList] = useState([]);
  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <h1>MOTOS DISPONIBLES</h1>
      <Row>
        {list.map((bike) => (
          <CardBike bike={bike} key={bike.id} />
        ))}
      </Row>
    </Container>
  );
};

export default ListBikes;
