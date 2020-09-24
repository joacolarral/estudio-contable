import styled from "styled-components";
// import contactUs from "../../../assets/images/contactUs.png";

const Title = styled.h1`
  width: 90%;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  text-align: center;
  margin: 4em auto 2em;
`;

// background-image: url(${contactUs});
// background-repeat: no-repeat;
// background-attachment: fixed;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #212226;
`;

export { Title, Container };
