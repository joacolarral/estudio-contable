import React from "react";
import {
  Form,
  Input,
  Message,
  DivMessage,
  Label,
  DivInputs,
  Container,
  DivWrapperInputs,
  DivButtons,
  Buttons,
} from "./styles";

export default () => {
  return (
    <Container>
      <Form>
        <DivWrapperInputs>
          <DivInputs>
            <Label>
              Nombre<span>&#42;</span>
            </Label>
            <Input type="text" required />
          </DivInputs>
          <DivInputs>
            <Label>Telefono</Label> <Input type="tel" />
          </DivInputs>
          <DivInputs>
            <Label>
              Email<span>&#42;</span>
            </Label>
            <Input type="email" required />
          </DivInputs>
        </DivWrapperInputs>
        <DivMessage>
          <Label>
            Mensaje<span>&#42;</span>
          </Label>
          <Message required />
        </DivMessage>
        <DivButtons>
          <Buttons type="submit" value="Enviar Consulta" />
        </DivButtons>
      </Form>
    </Container>
  );
};
