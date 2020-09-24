import React from "react";
import { Title, Container, Content } from "./styles";

export default () => {
  return (
    <Container id="emprendedores">
      <Title data-aos="flip-right">
        <span style={{ padding: "0 10px", background: "#efefef" }}>
          EMPRENDEDORES
        </span>
      </Title>
      <Content
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        Si sos emprendedor, tenes un comercio o querés invertir en un proyecto,
        no te preocupes ! Podemos ayudarte a que puedas dar el primer paso y te
        puedas embarcar sin miedo. Sabemos lo importante que es el apoyo y dar
        el primer paso por eso queremos estar ahí para acompañarte y asesorarte
        contablemente sobre la administración financiera. Vamos a recomendarte
        siempre las mejores opciones para cuidar tu rentabilidad y estar siempre
        en regla.
      </Content>{" "}
      <Content
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        !Apostemos juntos!
      </Content>
    </Container>
  );
};
