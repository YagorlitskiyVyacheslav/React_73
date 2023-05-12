import { rgba } from "emotion-rgba";
import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: ${({ theme }) => rgba(theme.colors.secondary, 0.75)};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  height: 40px;
  font-size: 20px;
  border-radius: 4px;
  padding: 0 20px;
  transition: 300ms;
  cursor: pointer;
  ::placeholder {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const StyledLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelText = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.accent};
`;
