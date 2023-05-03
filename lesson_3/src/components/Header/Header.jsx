import React, { Component } from "react";
import { DARK, LIGHT } from "../../constants/theme";
import { Button, HeaderComponent, Image, ThemeWrapper } from "./styled";

// export const Header = () => {
//   return (
//     <HeaderComponent>
//       <Image
//         src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
//         alt="Logo"
//       />
//       <ThemeWrapper>
//         <Button>Dark</Button>
//         <Button>Light</Button>
//       </ThemeWrapper>
//     </HeaderComponent>
//   );
// };

export class Header extends Component {
  handleClick = (e) => {
    if (this.state.theme === e.target.name) return;
    // if (this.state.theme === LIGHT) {
    //   this.setState({
    //     theme: DARK,
    //   });
    // }
    // if (this.state.theme === DARK) {
    //   this.setState({
    //     theme: LIGHT,
    //   });
    // }
    this.setState((prevState) => ({
      theme: prevState.theme === LIGHT ? DARK : LIGHT,
      customText: "Custom text",
    }));
  };

  //   handleChange = (event) => {
  //     console.log(event);
  //   };

  render() {
    // console.log(this.props);
    const { onToggle, theme } = this.props;

    return (
      <HeaderComponent>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          alt="Logo"
        />
        <ThemeWrapper>
          <Button isActive={theme === DARK} name={DARK} onClick={onToggle}>
            Dark
          </Button>
          <Button isActive={theme === LIGHT} name={LIGHT} onClick={onToggle}>
            Light
          </Button>
          {/* <p>{theme}</p> */}
          {/* <input type="text" onKeyDown={this.handleChange} /> */}
        </ThemeWrapper>
      </HeaderComponent>
    );
  }
}
