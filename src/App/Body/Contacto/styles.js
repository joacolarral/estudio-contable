import styled from "styled-components";
import contactUs from "../../../assets/images/contactUs.png";

const Title = styled.h1`
  text-align: center;
  margin-top: 6rem;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  background-image: url(${contactUs});
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Title, Container };
