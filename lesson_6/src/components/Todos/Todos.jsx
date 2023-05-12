import React, { Component } from "react";
import { Todo } from "./Todo";
import { ActionsWrapper, List, Wrapper } from "./styled";
import { AddTodo } from "../AddTodo/AddTodo";
import { Input } from "../common/inputs/Input";
import { todosApi } from "../../api/todos";
import { QUERY } from "../../constants/localStorage";

export class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      todos: [],
      isLoading: false,
      error: "",
    };
  }

  componentDidMount() {
    this.getTodosAsync(localStorage.getItem(QUERY));
    this.setState({
      query: localStorage.getItem(QUERY),
    });
  }

  getSnapshotBeforeUpdate() {
    return {
      scrollY: window.scrollY,
    };
  }

  componentDidUpdate(_, prevState, snapshot) {
    setTimeout(() => {
      window.scrollTo({
        top: snapshot.scrollY,
        behavior: "smooth",
      });
    }, 0);
  }

  getTodosAsync = async (query) => {
    try {
      this.setState({ isLoading: true });
      const todos = await todosApi.get(query);
      this.setState({
        todos,
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleChange = ({ target: { value: query } }) => {
    this.getTodosAsync(query);
    localStorage.setItem(QUERY, query);
    this.setState({
      query,
    });
  };

  render() {
    const { handleChange, getTodosAsync, state } = this;

    return (
      <Wrapper>
        <ActionsWrapper>
          <Input
            placeholder="Search..."
            value={state.query}
            onChange={handleChange}
          />
          <AddTodo onSubmit={getTodosAsync} />
        </ActionsWrapper>
        {state.error && <div style={{ marginTop: 20 }}>{state.error}</div>}
        {state.isLoading ? (
          <div style={{ marginTop: 20 }}>Loading...</div>
        ) : (
          <List>
            {state.todos.map((item) => (
              <Todo onDelete={getTodosAsync} {...item} key={item.id} />
            ))}
          </List>
        )}
      </Wrapper>
    );
  }
}
