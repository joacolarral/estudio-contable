import styled, { keyframes } from "styled-components";

const slideTop = keyframes`
0% {
  transform: translateY(80px);
}
100% {
  transform: translateY(0);
}`;

const slideBottom = keyframes`
0% {
  transform: translateY(0);
}
100% {
  transform: translateY(80px);
}`;

const expandText = keyframes`
0% {
  opacity: 0;
}
40% {
  opacity: 0.6;
}
100% {
  transform: translateZ(0);
  opacity: 1;
}`;

const contractText = keyframes`
0% {
  transform: translateZ(0);
  opacity: 1;
}
60% {
  opacity: 0.4;
}
100% {
  opacity: 0;
}
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  display: flex;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
const Title2 = styled.h3`
  margin: 0;
  animation: ${slideBottom} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const Content = styled.p`
  margin-top: 15px;
  letter-spacing: 0.5px;
  width: 80%;
  line-height: 1.8rem;
  animation: ${contractText} 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
`;

const Wrapper = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;

  :hover ${Title2} {
    animation: ${slideTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  :hover ${Content} {
    animation: ${expandText} 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }
`;

export { Title, Container, Title2, Content, Wrapper };
