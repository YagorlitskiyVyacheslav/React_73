import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import { Todos } from "./components/Todos";
import { Component } from "react";
import { DARK, LIGHT } from "./constants/theme";
import { theme } from "./theme";
import { Button } from "./components/common/Button";

export class App extends Component {
  state = {
    theme: LIGHT,
    isShowTodos: true,
  };

  showTodosToggler = () => {
    this.setState(({ isShowTodos }) => ({
      isShowTodos: !isShowTodos,
    }));
  };

  themeTogler = (e) => {
    if (this.state.theme === e.target.name) return;
    this.setState((prevState) => ({
      theme: prevState.theme === LIGHT ? DARK : LIGHT,
      customText: "Custom text",
    }));
  };

  render() {
    return (
      <ThemeProvider theme={theme[this.state.theme]}>
        <Header
          text="Some text"
          theme={this.state.theme}
          onToggle={this.themeTogler}
        />
        <Button onClick={this.showTodosToggler}>
          {this.state.isShowTodos ? "Hide Todos" : "Show Todos"}
        </Button>
        {this.state.isShowTodos && <Todos />}
      </ThemeProvider>
    );
  }
}
