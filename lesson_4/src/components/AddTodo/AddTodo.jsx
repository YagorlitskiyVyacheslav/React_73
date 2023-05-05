import { Component } from "react";
import { Button } from "../common/Button";
import { BaseModal } from "../common/modals/BaseModal";

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
        <BaseModal
          title="Add todo"
          isOpen={openModal}
          close={toggleModalHandler}
        >
          Add todo modal
        </BaseModal>
      </>
    );
  }
}
