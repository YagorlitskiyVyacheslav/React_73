import { Component } from "react";
import {
  Checkbox,
  DeleteButton,
  Item,
  Priority,
  SubTitle,
  Title,
} from "./styled";

export class Todo extends Component {
  state = {
    isDeleted: false,
  };

  shouldComponentUpdate(_, nextState) {
    console.log(nextState);
    return !nextState.isDeleted;
  }

  onDelete = () => {
    console.log("deleted");
    this.setState({ isDeleted: true });
  };

  render() {
    const { title, description, priority, completed } = this.props;
    return (
      <Item>
        <DeleteButton onClick={this.onDelete}>&#10006;</DeleteButton>
        <div>
          <Title>{title}</Title>
          <SubTitle addClass="new-class">{description}</SubTitle>
          <Priority priority={priority}>{priority}</Priority>
        </div>
        <Checkbox>{completed ? "Completed" : "Mark"}</Checkbox>
      </Item>
    );
  }
}
