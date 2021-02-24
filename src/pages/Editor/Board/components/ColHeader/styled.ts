import { activeColor } from "@/assets/styled";
import { Resizable } from "@/assets/styled/variables";
import styled from "styled-components";
export const StyledHeader = styled.div`
  white-space: nowrap;
  height: ${(props: { height: string }) => props.height};
  width: 100%;
  display: flex;
  overflow: hidden;
`;

export const ColIndexHeader = styled.div`
  overflow: hidden;
  display: inline-block;
  padding-right: 20px;
`;
export const ResizableContent = styled(Resizable)`
  right: -6px;
  top: 0;
  width: 12px;
  height: 100%;
  cursor: e-resize;
`;

export const VertAxis = styled.div`
  height: 100%;
  border-left: 2px dashed ${activeColor};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: none;
`;
