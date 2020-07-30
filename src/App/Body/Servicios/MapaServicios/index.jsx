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
} from "@fortawesome/free-solid-svg-icons";

export default () => {
  return (
    <>
      <Title id="servicios" data-aos="flip-left">
        SERVICIOS
      </Title>
      <Container data-aos="zoom-in">
        <Service icon={faCalculator} service={"IMPUESTOS"} />
        <Service icon={faChartBar} service={"CONTABILIDAD"} />
        <Service icon={faFax} service={"LABORAL"} />
        <Service icon={faUsers} service={"SOCIEDADES"} />
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
