import styled from "styled-components";

export const Title = styled.h5`
  font-size: ${(props) => props.theme.fontSizes.medium};
  width: ${(props) => props.width};
  color: ${(props) =>
    props.dark ? props.theme.colors.primary : props.theme.colors.secondary};
`;
