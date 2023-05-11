import React, { Component } from "react";
import { Todo } from "./Todo";
import { ActionsWrapper, List, Wrapper } from "./styled";
import { AddTodo } from "../AddTodo/AddTodo";
import { Input } from "../common/inputs/Input";
import debounce from "lodash.debounce";
import uniqid from "uniqid";
import { todosApi } from "../../api";

const onScrollEvent = () => {
  console.log(window.scrollY);
};

export class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      todos: [],
      isLoading: true,
      error: "",
      filteredTodos: [],
    };
  }

  async componentDidMount() {
    console.log("component mounted");
    this.getTodosAsync();
    window.addEventListener("scroll", onScrollEvent);
  }

  getSnapshotBeforeUpdate() {
    return {
      qwe: "qwe",
    };
  }

  componentDidUpdate(_, prevState, snapshot) {
    console.log(snapshot);
    const { todos, search } = this.state;
    if (prevState.search !== search) {
      this.setState({
        filteredTodos: todos.filter((todo) =>
          todo.title.toLowerCase().includes(search.toLowerCase())
        ),
      });
    }
  }

  componentWillUnmount() {
    console.log("component unmounted");
    window.removeEventListener("scroll", onScrollEvent);
  }

  async getTodosAsync() {
    try {
      this.setState({ isLoading: true });
      const todos = await todosApi.get();
      this.setState({
        todos,
        filteredTodos: todos,
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

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
            onChange={debounce(handleChange, 1000)}
          />
          <AddTodo onSubmit={handleSubmit} />
        </ActionsWrapper>
        {state.error && <div style={{ marginTop: 20 }}>{state.error}</div>}
        {state.isLoading ? (
          <div style={{ marginTop: 20 }}>Loading...</div>
        ) : (
          <List>
            {state.filteredTodos.map((item) => (
              <Todo {...item} key={item.id} />
            ))}
          </List>
        )}
      </Wrapper>
    );
  }
}
