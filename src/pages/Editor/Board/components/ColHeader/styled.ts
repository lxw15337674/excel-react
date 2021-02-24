import styled from "styled-components";
export const StyledHeader = styled.div`
  white-space: nowrap;
  height: ${(props) => props.height};
  width: 100%;
  display: flex;
  overflow: hidden;
`;

export const ColIndexHeader = styled.div`
  overflow: hidden;
  display: inline-block;
  padding-right:20px;
`;
