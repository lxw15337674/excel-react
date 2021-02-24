import React, { useContext, useMemo, useState } from "react";
import Context from "@/store";
import ColHeaderCell from "./ColHeaderCell";
import { BaseCell } from "../../../styled";
import { StyledHeader } from "./styled";

const Cell = (props) => {
  const {
    state: { table, activeSheetIndex },
    dispatch,
  } = useContext(Context);
  const sheet = useMemo(() => table.getSheetByIndex(activeSheetIndex), [table]);
  const placeholderCell = useMemo(() => sheet.getPlaceholderCell(), [sheet]);
  return <StyledHeader style={placeholderCell}></StyledHeader>;
};
export default Cell;
