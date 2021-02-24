import React, { useEffect, useRef, useState } from "react";
import { StyledBoard } from "./styled";
import DataCellsBoard from "./components/DataCellsBoard";
import ColHeader from "./components/ColHeader";
import RowHeader from "./components/RowHeader";
import useEventListener from "@/common/hooks/useEventListener";

const Board = () => {
  const colRef = useRef<HTMLElement>();
  const rowRef = useRef<HTMLElement>();
  const boardRef = useRef<HTMLElement>();
  useEventListener(
    "scroll",
    (e) => {
      colRef.current.scrollLeft = e.target.scrollLeft;
      rowRef.current.scrollTop = e.target.scrollTop;
    },
    { target: boardRef },
  );
  return (
    <StyledBoard>
      <ColHeader colHeaderRef={colRef} />
      <RowHeader RowHeaderRef={rowRef} />
      <DataCellsBoard BoardRef={boardRef} />
    </StyledBoard>
  );
};

export default Board;
