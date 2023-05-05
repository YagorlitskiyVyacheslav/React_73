import React from "react";
import { CloseButton, ModalTitle, StyledModal } from "./styled";

export const BaseModal = ({ isOpen, close, children, title }) => {
  return (
    <StyledModal iaHideApp={false} isOpen={isOpen} onRequestClose={close}>
      <ModalTitle>{title}</ModalTitle>
      <CloseButton onClick={close}>&#10006;</CloseButton>
      {children}
    </StyledModal>
  );
};
