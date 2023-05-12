import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  margin-top: 40px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  align-items: flex-end;
`;
