import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;

  @media (max-width: 425px) {
    height: 500px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-flow: column;
`;

const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 50%;

  @media (max-width: 425px) {
    margin-bottom: 15px;
    flex: 1 0 auto;
  }
`;

const Input = styled.input`
  margin: 5px;
  padding: 5px;
`;

const Label = styled.label`
  margin: 5px;
`;

const DivMessage = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;

  @media (max-width: 425px) {
    flex: 1 0 auto;
    flex-basis: auto;
  }
`;

const Message = styled.textarea`
  margin: 5px;
  overflow: hidden;
  resize: none;
  flex: 1 0 auto;
`;

const DivWrapperInputs = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const DivButtons = styled.div`
  margin-bottom: 25px;
`;

const Buttons = styled.input`
  margin: 5px;
  padding: 5px;
  width: 110px;
`;

export {
  Form,
  Input,
  Message,
  DivMessage,
  Label,
  DivInputs,
  Container,
  DivWrapperInputs,
  DivButtons,
  Buttons,
};
