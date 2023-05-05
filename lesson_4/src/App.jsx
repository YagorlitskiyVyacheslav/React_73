import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import { Todos } from "./components/Todos";
import { Component } from "react";
import { DARK, LIGHT } from "./constants/theme";
import { theme } from "./theme";

export class App extends Component {
  state = {
    theme: LIGHT,
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
        <Todos />
      </ThemeProvider>
    );
  }
}
