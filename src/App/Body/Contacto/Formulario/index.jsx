import React, { useState, useContext } from "react";
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
import { Store } from "../../../context";

export default () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    tel: "",
  });
  const { modal, setModal } = useContext(Store);

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setModal({ ...modal, show: true, status: true });
        window.gtag_report_conversion();
        console.log("se envio");
      } else {
        setModal({ ...modal, show: true, status: false });
      }
    };
    xhr.send(data);
  }

  return (
    <Container>
      <Form
        method="POST"
        action="https://formspree.io/mwkrvdbz"
        onSubmit={handleSubmit}
      >
        <DivWrapperInputs>
          <DivInputs>
            <Label>
              Nombre<span>&#42;</span>
            </Label>
            <Input onChange={handleChange} name="nombre" type="text" required />
          </DivInputs>
          <DivInputs>
            <Label>Telefono</Label>
            <Input onChange={handleChange} name="tel" type="tel" />
          </DivInputs>
          <DivInputs>
            <Label>
              Email<span>&#42;</span>
            </Label>
            <Input onChange={handleChange} type="email" name="email" required />
          </DivInputs>
        </DivWrapperInputs>
        <DivMessage>
          <Label>
            Mensaje<span>&#42;</span>
          </Label>
          <Message onChange={handleChange} name="message" required />
        </DivMessage>
        <DivButtons>
          <Buttons type="submit" value="Enviar Consulta" />
        </DivButtons>
      </Form>
    </Container>
  );
};
