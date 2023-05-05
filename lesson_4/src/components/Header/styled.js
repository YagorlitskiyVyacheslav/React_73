import styled from "styled-components";
import { Button } from "../common/Button";

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  height: 50px;
`;

export const ThemeWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledButton = styled(Button)`
  background-color: ${(props) => {
    const { theme, isActive } = props;
    return isActive ? theme.colors.success : theme.colors.secondary;
  }};
`;
