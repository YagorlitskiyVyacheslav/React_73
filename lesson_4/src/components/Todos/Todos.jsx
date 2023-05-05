import React, { Component } from "react";
import { Todo } from "./Todo";
import todo from "./data.json";
import { ActionsWrapper, List, Wrapper } from "./styled";
import { AddTodo } from "../AddTodo/AddTodo";
import { Input } from "../common/inputs/Input";
import debounce from "lodash.debounce";
import uniqid from "uniqid";

export class Todos extends Component {
  state = {
    search: "",
    todos: todo,
  };

  handleChange = ({ target: { value: search } }) => {
    this.setState({
      search,
    });
  };

  handleSubmit = (formData) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.concat({ ...formData, id: uniqid() }),
      };
    });
  };

  render() {
    const { handleChange, handleSubmit, state } = this;

    return (
      <Wrapper>
        <ActionsWrapper>
          <Input
            placeholder="Search..."
            // value={state.search}
            onChange={debounce(handleChange, 1000)}
          />
          <AddTodo onSubmit={handleSubmit} />
        </ActionsWrapper>
        <List>
          {state.todos
            .filter((item) =>
              item.title.toLowerCase().includes(state.search.toLowerCase())
            )
            .map((item) => (
              <Todo {...item} key={item.id} />
            ))}
        </List>
      </Wrapper>
    );
  }
}
