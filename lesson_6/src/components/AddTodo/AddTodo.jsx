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

  render() {
    const {
      toggleModalHandler,
      state: { openModal },
    } = this;
    return (
      <>
        <Button onClick={toggleModalHandler}>Add Todo</Button>
        {openModal && (
          <AddTodoModal
            onClose={toggleModalHandler}
            open={openModal}
            onSubmit={this.props.onSubmit}
          />
        )}
      </>
    );
  }
}
