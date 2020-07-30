import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const slideIn = keyframes`
0% {
  transform: translateX(-1000px);
  opacity: 0;
}
100% {
  transform: translateX(0);
  opacity: 1;
}`;
const slideOut = keyframes`
0% {
  transform: translateX(0);
  opacity: 1;
}
100% {
  transform: translateX(-1000px);
  opacity: 0;
}
`;

const Navbar = styled.nav`
  display: flex;
  height: 100px;
  position: fixed;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.75);
  top: 0;
  z-index: 2;
  width: 100%;
  background-color: #658da6;

  &:after {
    content: "";
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
`;

const DivLogo = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  z-index: 2;
  color: #eff7f3;

  @media (max-width: 425px) {
    font-size: 14px;
    justify-content: flex-start;
  }
`;

const Logo = styled.img`
  height: 80%;
  width: auto;
  margin-right: 5px;

  @media (max-width: 425px) {
    height: 60%;
    width: 30%;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  padding: 0;
  z-index: 2;

  @media (max-width: 700px) {
    visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
    position: fixed;
    flex-direction: column;
    justify-content: space-evenly;
    height: 25rem;
    width: 16rem;
    top: 100.01px;
    margin: 0;
    border: 0px solid #000000;
    border-radius: 0px 0px 10px 0px;
    box-shadow: 7px 6px 9px 0px rgba(0, 0, 0, 0.75);
    background-color: #658da6;

    animation: ${({ open }) => (open ? slideIn : slideOut)} 0.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;

const Items = styled.li`
  list-style-type: none;
  flex: 0 0 25%;
  font-size: 14px;
  height: 100%;
  text-align: center;
`;

const DivBars = styled.div`
  display: none;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
  }
  @media (max-width: 375px) {
    display: flex;
    flex: 1 0 auto;
    margin-right: 0;
  }
`;

const Bars = styled(FontAwesomeIcon)`
  padding: 5px;
  z-index: 9999;
`;

const LinkItem = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eff7f3;
  text-decoration: none;

  :active {
    background-color: transparent;
    color: #038c4c;
  }
  :focus {
    outline: none;
  }
`;

const BackgroundBlack = styled.div`
  display: ${({ open }) => (open ? "" : "none")};
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);

  @media (min-width: 700px) {
    display: none;
  }
`;

export {
  Navbar,
  DivLogo,
  Logo,
  Ul,
  Items,
  LinkItem,
  Bars,
  DivBars,
  BackgroundBlack,
};
