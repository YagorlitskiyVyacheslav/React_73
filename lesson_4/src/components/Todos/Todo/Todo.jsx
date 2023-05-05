import { Checkbox, Item, Title } from "./styled";

export const Todo = ({ title, completed }) => {
  return (
    <Item>
      <Title>{title}</Title>
      {/* <SubTitle addClass="new-class">Test content</SubTitle> */}
      <Checkbox>{completed ? "Completed" : "Mark"}</Checkbox>
    </Item>
  );
};
