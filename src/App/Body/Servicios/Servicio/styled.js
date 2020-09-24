import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${({ row }) => row};
  align-items: flex-start;
  background-color: ${({ row }) => row === "row-reverse" && "white"};

  @media (max-width: 915px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

const Div1 = styled.div`
  flex: 0 0 50%;
  display: flex;
  flex-flow: column;
  align-self: center;
  align-items: center;
  width: 100%;
`;

const Div2 = styled.div`
  flex: 0 0 50%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
`;

const Img = styled.img`
  margin: 0;
  width: 100%;
  height: 60%;
`;

const Ul = styled.ul`
  padding: 0;
  width: 100%;
  text-align: center;
`;

const Items = styled.li`
  list-style-type: none;
  letter-spacing: 0.5px;
  padding: 10px;
`;

export { Container, Title, Ul, Items, Div1, Div2, Img };
