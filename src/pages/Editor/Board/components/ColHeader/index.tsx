import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import Context from "@/store";
import ColHeaderCell from "./ColHeaderCell";
import { StyledHeader, ColIndexHeader } from "./styled";
import PlaceHolderCell from "./PlaceHolderCell";

interface Props {
  colHeaderRef: React.Ref<HTMLElement>;
}
const ColHeader = ({ colHeaderRef }: Props) => {
  const {
    state: { table, activeSheetIndex },
    dispatch,
  } = useContext(Context);

  const sheet = useMemo(() => table.getSheetByIndex(activeSheetIndex), [table]);
  const cells = useMemo(() => sheet.getColCells(), [sheet]);
  return (
    <StyledHeader height={cells[0].height}>
      <PlaceHolderCell />
      <ColIndexHeader ref={colHeaderRef}>
        {cells.map((item) => {
          return <ColHeaderCell {...item} key={item.id++} />;
        })}
      </ColIndexHeader>
    </StyledHeader>
  );
};
export default ColHeader;
