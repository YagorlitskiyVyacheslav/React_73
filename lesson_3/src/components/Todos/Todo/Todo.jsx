import { Checkbox, Item, Title } from "./styled";

export const Todo = ({ title, completed }) => {
  return (
    <Item>
      <Title>{title}</Title>
      <Checkbox>{completed ? "Completed" : "Mark"}</Checkbox>
    </Item>
  );
};
