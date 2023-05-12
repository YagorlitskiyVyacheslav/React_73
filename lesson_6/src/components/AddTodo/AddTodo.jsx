import { Component } from "react";
import { Button } from "../common/Button";
import { AddTodoModal } from "./AddTodoModal";

export class AddTodo extends Component {
  state = {
    openModal: false,
  };

  toggleModalHandler = () => {
    this.setState(({ openModal }) => ({
      openModal: !openModal,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, priority } = this.state;
    this.props.onSubmit({ title, description, priority });
    this.toggleModalHandler();
  };

  render() {
    const {
      toggleModalHandler,
      state: { openModal },
      handleSubmit,
    } = this;
    return (
      <>
        <Button onClick={toggleModalHandler}>Add Todo</Button>
        {openModal && (
          <AddTodoModal
            onClose={toggleModalHandler}
            open={openModal}
            onSubmit={handleSubmit}
          />
        )}
      </>
    );
  }
}
