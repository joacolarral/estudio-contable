import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 25px;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Icons = styled(FontAwesomeIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  width: 32px !important;
  margin: 10px;
`;

const Text = styled.h3`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  :hover {
    color: ${({ color }) => color};
    transition: all 0.5s cubic-bezier(0, 0, 0.2, 1);
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #212226;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    color: ${({ color }) => color};
    transition: all 0.5s cubic-bezier(0, 0, 0.2, 1);
  }
`;

const Div = styled.li`
  display: flex;
  margin: 10px;
`;

export { Icons, Text, Container, Div, Link };
