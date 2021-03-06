import React from "react";
import { Title, Container, Title2, Content, Wrapper } from "./styles";

export default () => {
  return (
    <div
      id="nosotros"
      style={{ padding: "3em 0", textAlign: "-webkit-center" }}
    >
      <Title data-aos="flip-right">
        <span style={{ padding: "0 10px", background: "#ffff" }}>NOSOTROS</span>
      </Title>
      <Container data-aos="zoom-in-up">
        <Wrapper>
          <Title2>FRANCISCO BUCCAFUSCA</Title2>
          <Content>
            Contador Público con amplia experiencia de trabajo en empresas y en
            un estudio internacional de auditoría, volcando los conocimientos
            adquiridos asesorando a Pymes y emprendimientos personales, poniendo
            énfasis en la atención profesional y personalizada
          </Content>
        </Wrapper>
        <Wrapper>
          <Title2>ASOCIATIVIDAD</Title2>
          <Content style={{ paddingTop: "10px" }}>
            Asociado a profesionales con distintas formaciones con competencia
            en derecho, economía y marketing, para acompañar con excelencia la
            gestión de nuestros clientes.
          </Content>
        </Wrapper>
      </Container>
    </div>
  );
};
