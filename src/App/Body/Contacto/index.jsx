import React from "react";
import { Title, Container } from "./styles";
import Formulario from "./Formulario";
import ContactoPersonal from "./ContactoPersonal";

export default () => {
  return (
    <Container id="contacto" data-aos="zoom-in">
      <Title data-aos="flip-right">
        <span style={{ padding: "0 10px", background: "#ffff" }}>CONTACTO</span>
      </Title>
      <ContactoPersonal />
      <Formulario />
    </Container>
  );
};
