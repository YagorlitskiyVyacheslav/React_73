import ReactSelect from "react-select";
import { Label } from "./Label";

export const Select = ({ label, ...props }) => {
  return (
    <Label label={label}>
      <ReactSelect {...props} />
    </Label>
  );
};
