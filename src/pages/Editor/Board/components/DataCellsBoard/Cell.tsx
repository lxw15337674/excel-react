import React, { useMemo, useState } from "react";
import { Cell as CellType } from "excelts";
import styled from "styled-components";
import { CellBaseStyle } from "../../interface";
import { BaseCell, DataCell } from "../../styled";
const StyledCell = styled.div``;

interface Props {
  cell: CellType;
}
const Cell = ({ cell }: Props) => {
  const index = useMemo(() => cell.getIndex(), [cell]);
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <DataCell
      style={cell.getCellStyle()}
      data-row={index.row}
      data-col={index.col}
      onClick={onClick}
    >
      {cell.getValue()}
    </DataCell>
  );
};
export default Cell;
