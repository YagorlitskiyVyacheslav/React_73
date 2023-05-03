import styled from "styled-components";

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

export const Button = styled.button`
  background-color: ${(props) => {
    const { theme, isActive } = props;
    return isActive ? theme.colors.success : theme.colors.secondary;
  }};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  height: 24px;
  border-radius: 4px;
  padding: 0 15px;
  transition: 300ms;
`;
