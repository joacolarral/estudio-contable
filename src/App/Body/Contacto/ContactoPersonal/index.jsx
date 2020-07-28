import React from "react";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Icons, Text, Container, Div, Link } from "./styles";

export default () => {
  return (
    <Container data-aos="zoom-out">
      <Div>
        <Icons icon={faMobileAlt} />
        <Text>11 23064904</Text>
      </Div>
      <Div>
        <Icons icon={faEnvelope} />
        <Link href={"mailto:franciscob@estudiofrb.com.ar"}>
          franciscob@estudiofrb.com.ar
        </Link>
      </Div>
      <Div>
        <Icons icon={faWhatsapp} />
        <Text>11 23064904</Text>
      </Div>
    </Container>
  );
};
