import React from "react";
import { Container, Title, Ul, Items, Div1, Div2, Img } from "./styled";
import { impuestos, contabilidad, laboral, sociedades } from "./servicio";
import impuestosJpg from "../../../../assets/images/rsz_impuestos.jpg";
import contabilidadJpg from "../../../../assets/images/rsz_contabilidad.jpg";
import laboralJpg from "../../../../assets/images/rsz_laboral.jpg";
import sociedadesJpg from "../../../../assets/images/rsz_sociedades.jpg";

export default () => {
  return (
    <>
      <ServiceCreate
        servicio={impuestos}
        title={"IMPUESTOS"}
        row={"row"}
        img={impuestosJpg}
      />
      <ServiceCreate
        servicio={contabilidad}
        title={"CONTABILIDAD"}
        row={"row-reverse"}
        img={contabilidadJpg}
      />
      <ServiceCreate
        servicio={laboral}
        title={"LABORAL"}
        row={"row"}
        img={laboralJpg}
      />
      <ServiceCreate
        servicio={sociedades}
        title={"SOCIEDADES"}
        row={"row-reverse"}
        img={sociedadesJpg}
      />
    </>
  );
};

function ServiceCreate({ servicio, title, row, img }) {
  return (
    <Container id={title.toLowerCase()} row={row}>
      <Div1>
        <Title>{title}</Title>
        <Ul>
          {!!servicio.length &&
            servicio.map((resource, i) => <Items key={i}>{resource}</Items>)}
        </Ul>
      </Div1>
      <Div2 data-aos={"zoom-in"}>
        <Img src={img} />
      </Div2>
    </Container>
  );
}
