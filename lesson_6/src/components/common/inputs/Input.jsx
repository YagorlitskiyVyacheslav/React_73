import { Label } from "./Label";
import { StyledInput } from "./styled";

export const Input = ({ label, ...props }) => {
  return (
    <Label label={label}>
      <StyledInput {...props} />
    </Label>
  );
};
