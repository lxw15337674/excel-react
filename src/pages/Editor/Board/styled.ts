import { activeColor } from "@/assets/styled";
import styled from "styled-components";
export const StyledBoard = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  overflow: auto;
  white-space: nowrap;
`;

export const StyledSelectContent = styled.div`
  border: 2px solid ${activeColor};
  background: #e5f3ff;
  position: absolute;
  pointer-events: none;
  will-change: transform;
`;

export const BaseCell = styled.div`
  background-color: white;
  border-color: #0000001f;
  border-style: solid;
  border-width: 0 1px 1px 0;
  box-sizing: border-box;
  overflow: hidden;
  user-select: none;
`;

export const DataCell = styled(BaseCell)`
  position: absolute;
`;
