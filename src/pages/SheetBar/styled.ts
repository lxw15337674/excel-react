import styled from "styled-components";
import { bgColor, border } from "../../assets/styled";
export const StyledSheetBar = styled.div`
  height: 35px;
  width: 100%;
  background: ${bgColor};
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  padding-bottom: 3px;
  border-top: ${border};
`;
