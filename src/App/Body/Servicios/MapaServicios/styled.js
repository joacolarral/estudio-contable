import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  height: 300px;

  @media (max-width: 425px) {
    margin-top: 20px;
  }
`;

const WrapperLink = styled(Link)`
  color: black;
  text-decoration: none;
  flex: 1 0 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  @media (max-width: 425px) {
    flex: 1 0 50%;
  }
`;

const DivIcon = styled.div`
  border: 1px solid darkred;
  border-radius: 75px;
`;

const ServiceText = styled.p``;

const Icons = styled(FontAwesomeIcon)`
  margin: 20px;
  font-size: 50px;
  width: 50px !important;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 1rem;
  padding-top: 2rem;
`;

export { Container, WrapperLink, ServiceText, Icons, DivIcon, Title };
