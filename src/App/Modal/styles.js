import styled from "styled-components";

const BackgroundModal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const ExitModal = styled.span`
  content: "x";
  position: absolute;
  right: 0;
  margin-right: 10px;
  margin-top: 5px;
  top: 0;
  cursor: pointer;
`;
const ModalContent = styled.p`
  flex: 1 0 auto;
  text-align: center;

  @media (max-width: 425px) {
    flex: 1;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  color: white;
  border: 0px solid #000000;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.75);
  background-color: ${({ color }) => (color ? "#038C4C" : "red")};

  @media (max-width: 768px) {
    height: 75px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  @media (max-width: 580px) {
    width: 75%;
  }
  @media (max-width: 425px) {
    width: 80%;
  }
  @media (max-width: 425px) {
    width: 80%;
  }
`;

export { ModalContent, ModalContainer, BackgroundModal, ExitModal };
