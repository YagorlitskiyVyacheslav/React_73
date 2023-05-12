import { rgba } from "emotion-rgba";
import styled, { css } from "styled-components";

export const Item = styled.li`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.accent};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  position: relative;
`;

export const Title = styled.h5`
  font-size: 16px;
  margin: 0;
  line-height: 18px;
  margin-bottom: 10px;
`;

export const SubTitle = styled(Title).attrs(() => ({
  as: "p",
}))`
  font-size: 12px;
`;

export const Priority = styled.span((props) => {
  const { priority, theme } = props;

  const priorityCSS = {
    hight: css`
      color: ${theme.colors.danger};
      background: ${rgba(theme.colors.danger, 0.1)};
    `,
    medium: css`
      color: ${theme.colors.warning};
      background: ${rgba(theme.colors.warning, 0.1)};
    `,
    low: css`
      color: ${theme.colors.success};
      background: ${rgba(theme.colors.success, 0.1)};
    `,
  };

  return css`
    padding: 4px 6px;
    display: block;
    border-radius: 5px;
    width: fit-content;
    ${priorityCSS[priority]}
  `;
});

export const Checkbox = styled.p`
  margin: 0;
  font-size: 12px;
  color: yellow;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const DeleteButton = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  font-size: 16px;
  background-color: transparent;
  position: absolute;
  right: 15px;
  top: 10px;
  transition: 300ms;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => rgba(theme.colors.danger, 0.7)};
  }
`;
