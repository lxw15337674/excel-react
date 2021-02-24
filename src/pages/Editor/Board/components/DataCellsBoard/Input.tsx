import React from "react";
import styled from "styled-components";
import { Cell as CellType } from "excelts";
import { activeColor } from "@/assets/styled";

const StyledInput = styled.input`
  position:absolute;
  border: 0 solid ${activeColor};
  box-shadow: 0 0 0 2px ${activeColor};
  box-sizing: border-box;
  resize: none;
  will-change: transform;
  overflow: hidden;
  &:focus {
    outline-color: ${activeColor};
  }
`;
interface Props {
  cell: CellType;
}
const Input = ({ cell }: Props) => {
  const onChange = (e) => {
    cell.setValue(e.target.value);
  };
  const onClick = (e)=>{
      e.stopPropagation()
  }
  return (
    <StyledInput onClick={onClick} style={cell.getCellStyle()} onChange={onChange}></StyledInput>
  );
};
export default Input;
