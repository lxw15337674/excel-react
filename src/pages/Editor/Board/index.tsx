import React, { useRef } from "react";
import { StyledBoard } from "./styled";
import DataCellsBoard from "./components/DataCellsBoard";
import ColHeader from "./components/ColHeader";
import RowHeader from "./components/RowHeader";
import useSyncScroll from "@/common/hooks/useSyncScroll";

const Board = () => {
  const colRef = useRef<HTMLElement>();
  const rowRef = useRef<HTMLElement>();
  const boardRef = useRef<HTMLElement>();
  useSyncScroll([colRef, boardRef], "left");
  useSyncScroll([rowRef, boardRef], "top");
  return (
    <StyledBoard>
      <ColHeader colHeaderRef={colRef} />
      <RowHeader RowHeaderRef={rowRef} />
      <DataCellsBoard BoardRef={boardRef} />
    </StyledBoard>
  );
};

export default Board;
