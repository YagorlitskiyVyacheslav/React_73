import React, { Component } from "react";
import { DARK, LIGHT } from "../../constants/theme";
import { HeaderComponent, Image, StyledButton, ThemeWrapper } from "./styled";

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
  render() {
    const { onToggle, theme } = this.props;

    return (
      <HeaderComponent>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          alt="Logo"
        />
        <ThemeWrapper>
          <StyledButton
            isActive={theme === DARK}
            name={DARK}
            onClick={onToggle}
          >
            Dark
          </StyledButton>
          <StyledButton
            isActive={theme === LIGHT}
            name={LIGHT}
            onClick={onToggle}
          >
            Light
          </StyledButton>
        </ThemeWrapper>
      </HeaderComponent>
    );
  }
}
