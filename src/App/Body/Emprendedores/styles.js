import styled from "styled-components";

const Container = styled.div`
  background-color: #efefef;
  padding: 3em 5em;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
const Title = styled.h1`
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  text-align: center;
  margin: 2em 0;
`;

const Content = styled.p`
  line-height: 3em;
`;

export { Title, Container, Content };
