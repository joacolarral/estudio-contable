import React, { useContext } from "react";
import {
  ModalContent,
  ModalContainer,
  BackgroundModal,
  ExitModal,
} from "./styles";
import { Store } from "../context";

export default () => {
  const { modal, setModal } = useContext(Store);

  function handleClose() {
    setModal({ ...modal, show: false });
  }

  return (
    modal.show && (
      <>
        <BackgroundModal onClick={handleClose} />
        <ModalContainer color={modal.status}>
          <ModalContent>
            {modal.status
              ? "El mensaje fue enviado con éxito!"
              : "Hubo un error en el envío, intente nuevamente"}
            <ExitModal onClick={handleClose}>x</ExitModal>
          </ModalContent>
        </ModalContainer>
      </>
    )
  );
};
