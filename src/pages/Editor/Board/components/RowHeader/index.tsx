import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import Context from "@/store";
import RowHeaderCell from "./RowHeaderCell";
import { StyledHeader } from "./styled";

interface Props {
  RowHeaderRef: React.Ref<HTMLElement>;
}
const RowHeader = ({ RowHeaderRef }: Props) => {
  const {
    state: { table, activeSheetIndex },
    dispatch,
  } = useContext(Context);

  const sheet = useMemo(() => table.getSheetByIndex(activeSheetIndex), [table]);
  const cells = useMemo(() => sheet.getRowCells(), [sheet]);
  return (
    <StyledHeader ref={RowHeaderRef}>
      {cells.map((item) => {
        return <RowHeaderCell {...item} key={item.id++} />;
      })}
    </StyledHeader>
  );
};
export default RowHeader;
