import React from "react";
import { Todo } from "./Todo";
import todo from "./data.json";
import { List } from "./styled";

export const Todos = () => {
  return (
    <List>
      {todo.map((item) => (
        <Todo {...item} key={item.id} />
      ))}
    </List>
  );
};
