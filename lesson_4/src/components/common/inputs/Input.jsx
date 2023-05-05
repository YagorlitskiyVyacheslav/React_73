import { Label, StyledInput, LabelText } from "./styled";

export const Input = ({ label, ...props }) => {
  return (
    <Label>
      {label && <LabelText>{label}</LabelText>}
      <StyledInput {...props} />
    </Label>
  );
};
