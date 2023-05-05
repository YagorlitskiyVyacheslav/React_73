import styled from "styled-components";

export const Item = styled.li`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.accent};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
`;

export const Title = styled.h5`
  font-size: 16px;
  margin: 0;
  line-height: 18px;
`;

export const SubTitle = styled(Title).attrs((props) => ({
  as: "h2",
  title: "Sub title",
  className: props.addClass,
}))``;

export const Checkbox = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondary};
`;
