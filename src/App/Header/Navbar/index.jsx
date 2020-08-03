import React, { useState } from "react";
import logo from "../../../assets/images/icon-144x144.png";
import {
  Navbar,
  DivLogo,
  Logo,
  LogoText,
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

  function linkToHome() {
    let y = document.getElementById("root").offsetTop;
    window.scrollTo(0, y - 100);
  }

  return (
    <>
      <Navbar data-aos="fade-down">
        <DivLogo onClick={linkToHome}>
          <Logo src={logo} />
          <LogoText>Estudio Contable FRB</LogoText>
        </DivLogo>
        <Ul open={open} visible={visible}>
          <NavItem open={open} setOpen={setOpen} service={"Nosotros"} />
          <NavItem open={open} setOpen={setOpen} service={"Servicios"} />
          <NavItem open={open} setOpen={setOpen} service={"Contacto"} />
        </Ul>
        <DivBars>
          <Bars onClick={handleClick} icon={faBars} size={"2x"} />
        </DivBars>
      </Navbar>
      <BackgroundBlack onClick={handleClick} open={open} />
    </>
  );
};

function NavItem({ service, setOpen, open }) {
  function handleLink() {
    let y = document.getElementById(service.toLowerCase()).offsetTop;
    window.scrollTo(0, y - 100);
    setOpen(!open);
  }

  return (
    <Items>
      <LinkItem onClick={handleLink} to={{ hash: service.toLowerCase() }}>
        {service}
      </LinkItem>
    </Items>
  );
}
