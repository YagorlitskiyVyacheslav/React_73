import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  height: 40px;
  font-size: 20px;
  border-radius: 4px;
  padding: 0 20px;
  white-space: nowrap;
  transition: 300ms;
  cursor: pointer;
`;
