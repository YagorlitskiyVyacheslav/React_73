import React from "react";
import { Todo } from "./Todo";
import todo from "./data.json";
import { ActionsWrapper, List, Wrapper } from "./styled";
import { AddTodo } from "../AddTodo/AddTodo";
import { Input } from "../common/inputs/Input";

export const Todos = () => {
  return (
    <Wrapper>
      <ActionsWrapper>
        <Input placeholder="Search..." />
        <AddTodo />
      </ActionsWrapper>
      <List>
        {todo.map((item) => (
          <Todo {...item} key={item.id} />
        ))}
      </List>
    </Wrapper>
  );
};
