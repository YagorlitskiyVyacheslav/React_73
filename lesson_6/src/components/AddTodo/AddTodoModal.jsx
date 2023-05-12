import { Component } from "react";
import { Button } from "../common/Button";
import { Input } from "../common/inputs/Input";
import { InputGroup } from "../common/inputs/InputGroup";
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

export class AddTodoModal extends Component {
  state = {
    title: "",
    description: "",
    priority: "hight",
  };

  shouldComponentUpdate(_, nextState) {
    return nextState.priority !== "medium";
  }

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

  render() {
    const {
      state: { title, description, priority },
      handleChange,
      handleSelect,
    } = this;
    const { onClose, open, onSubmit } = this.props;
    return (
      <BaseModal title="Add todo" isOpen={open} close={onClose}>
        <form onSubmit={onSubmit}>
          <InputGroup>
            <Input
              onChange={handleChange}
              value={title}
              name="title"
              label="Title"
            />
          </InputGroup>
          <InputGroup>
            <Input
              onChange={handleChange}
              value={description}
              name="description"
              label="Description"
            />
          </InputGroup>
          <InputGroup>
            <Select
              value={option.find((item) => item.value === priority)}
              options={option}
              name="priority"
              onChange={handleSelect}
              label="Priority"
            />
          </InputGroup>
          <Button type="submit">Add todo</Button>
        </form>
      </BaseModal>
    );
  }
}
