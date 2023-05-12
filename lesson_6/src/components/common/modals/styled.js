import { rgba } from "emotion-rgba";
import ReactModal from "react-modal";
import styled from "styled-components";

export const StyledModal = styled(ReactModal)`
  width: 500px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: auto auto;
  box-shadow: ${({ theme }) => rgba(theme.colors.primary, 0.2)} 0px 7px 29px 0px;
  border: 1px solid ${({ theme }) => rgba(theme.colors.primary, 0.2)};
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  margin: 0;
  line-height: 26px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 30px;
`;

export const CloseButton = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  font-size: 20px;
  background-color: transparent;
  position: absolute;
  right: 20px;
  top: 22px;
  cursor: pointer;
`;
