import React from "react";
import {
  Container,
  WrapperLink,
  ServiceText,
  Icons,
  DivIcon,
  Title,
} from "./styled";
import {
  faCalculator,
  faChartBar,
  faFax,
  faUsers,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

export default () => {
  return (
    <>
      <Title data-aos="flip-left">
        <span style={{ padding: "0 10px", background: "rgb(239, 239, 239)" }}>
          {" "}
          SERVICIOS
        </span>
      </Title>
      <Container data-aos="zoom-in">
        <Service icon={faCalculator} service={"IMPUESTOS"} />
        <Service icon={faChartBar} service={"CONTABILIDAD"} />
        <Service icon={faFax} service={"LABORAL"} />
        <Service icon={faUsers} service={"SOCIEDADES"} />
        <Service icon={faBuilding} service={"EMPRENDEDORES"} />
      </Container>
    </>
  );
};

function Service({ icon, service }) {
  function handleClick() {
    let y = document.getElementById(service.toLowerCase()).offsetTop;
    window.scrollTo(0, y - 100);
  }

  return (
    <WrapperLink onClick={handleClick} to={{ hash: service.toLowerCase() }}>
      <DivIcon>
        <Icons icon={icon} />
      </DivIcon>
      <ServiceText>{service}</ServiceText>
    </WrapperLink>
  );
}
