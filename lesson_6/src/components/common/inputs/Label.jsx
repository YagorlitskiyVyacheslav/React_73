import { LabelText, StyledLabel } from "./styled";

export const Label = ({ label, children }) => {
  return (
    <StyledLabel>
      {label && <LabelText>{label}</LabelText>}
      {children}
    </StyledLabel>
  );
};
