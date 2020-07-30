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
const Label = styled.label`
  margin: 5px;
`;

const Input = styled.input`
  padding: 5px;
  margin: 0 5px 5px 5px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #212226;

  :focus {
    outline: none;
    border-bottom: 1px solid #038c4c;
    transition: all 0.5s cubic-bezier(0, 0, 0.2, 1);
  }
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
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #212226;

  :focus {
    outline: none;
    border-bottom: 1px solid #038c4c;
    transition: all 0.5s cubic-bezier(0, 0, 0.2, 1);
  }
`;

const DivWrapperInputs = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const DivButtons = styled.div`
  margin-bottom: 25px;
  display: flex;
`;

const Buttons = styled.input`
  margin: 5px;
  padding: 5px;
  flex: 1;
  border: 0px solid #000000;
  border-radius: 10px 10px 10px 10px;
  color: white;
  background-color: #658da6;
  :hover {
    background-color: #038c4c;
    transition: all 0.3s ease;
  }
  :active {
    outline: none;
  }
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
