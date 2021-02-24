import React from "react";
import { StyledSelectContent } from "../../styled";
import { Cell } from "excelts";


interface Props {
  cell: Cell;
}
const SelectContent = ({ cell }: Props) => {
 
  return (
    <StyledSelectContent ></StyledSelectContent>
  );
};
export default SelectContent;
