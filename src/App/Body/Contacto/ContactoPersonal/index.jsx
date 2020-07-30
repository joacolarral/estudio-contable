import React from "react";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Icons, Text, Container, Div, Link } from "./styles";

export default () => {
  return (
    <Container data-aos="zoom-out">
      <Div>
        <Icons icon={faMobileAlt} color="#658DA6" />
        <Text color="#658DA6">11 23064904</Text>
      </Div>
      <Div>
        <Icons icon={faEnvelope} color="#A66B49" />
        <Link href={"mailto:franciscob@estudiofrb.com.ar"} color="#A66B49">
          franciscob@estudiofrb.com.ar
        </Link>
      </Div>
      <Div>
        <Icons icon={faWhatsapp} color="#038C4C" />
        <Text color="#038C4C">11 23064904</Text>
      </Div>
    </Container>
  );
};
