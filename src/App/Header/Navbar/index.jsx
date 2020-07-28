import React, { useState } from "react";
import logo from "../../../assets/images/icon-144x144.png";
import {
  Navbar,
  DivLogo,
  Logo,
  Ul,
  Items,
  LinkItem,
  Bars,
  DivBars,
  BackgroundBlack,
} from "./styles";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setOpen(!open);
    setVisible(true);
  }

  return (
    <>
      <Navbar data-aos="fade-down">
        <DivLogo>
          <Logo src={logo} />
          Estudio Contable FRB
        </DivLogo>
        <Ul open={open} visible={visible}>
          <NavItem service={"Nosotros"} />
          <NavItem service={"Servicios"} />
          <NavItem service={"Contacto"} />
        </Ul>
        <DivBars>
          <Bars onClick={handleClick} icon={faBars} size={"2x"} />
        </DivBars>
      </Navbar>
      <BackgroundBlack onClick={handleClick} open={open} />
    </>
  );
};

function NavItem({ service }) {
  function handleLink() {
    console.log(document.getElementById(service.toLowerCase()));
    let y = document.getElementById(service.toLowerCase()).offsetTop;
    window.scrollTo(0, y - 100);
  }

  return (
    <Items>
      <LinkItem onClick={handleLink} to={{ hash: service.toLowerCase() }}>
        {service}
      </LinkItem>
    </Items>
  );
}
