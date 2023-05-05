import { Component } from "react";
import { Button } from "../common/Button";
import { Input } from "../common/inputs/Input";
import { Select } from "../common/inputs/Select";
import { BaseModal } from "../common/modals/BaseModal";

const option = [
  {
    label: "Hight",
    value: "hight",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "Low",
    value: "low",
  },
];

export class AddTodo extends Component {
  state = {
    openModal: false,
    title: "",
    description: "",
    priority: "hight",
  };

  toggleModalHandler = () => {
    this.setState(({ openModal }) => ({
      openModal: !openModal,
    }));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSelect = ({ value: priority }) => {
    this.setState({
      priority,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = this.state;
    this.props.onSubmit({ title, description });
    this.toggleModalHandler();
    this.setState({
      title: "",
      description: "",
    });
  };

  render() {
    const {
      toggleModalHandler,
      state: { openModal, title, description, priority },
      handleChange,
      handleSubmit,
      handleSelect,
    } = this;
    return (
      <>
        <Button onClick={toggleModalHandler}>Add Todo</Button>
        <BaseModal
          title="Add todo"
          isOpen={openModal}
          close={toggleModalHandler}
        >
          <form onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              value={title}
              name="title"
              label="Title"
            />
            <Input
              onChange={handleChange}
              value={description}
              name="description"
              label="Description"
            />
            <Select
              value={option.find((item) => item.value === priority)}
              options={option}
              name="priority"
              onChange={handleSelect}
            />
            <Button type="submit">Add todo</Button>
          </form>
        </BaseModal>
      </>
    );
  }
}
