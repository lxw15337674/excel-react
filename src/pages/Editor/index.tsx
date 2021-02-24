import Context from "@/store";
import React, { useContext, useMemo, useState } from "react";
import Board from "./Board";
import { Scroll } from "./Board/interface";
import Formula from "./Formula";
import { StyledEditor } from "./styled";
import ToolBar from "./ToolBar";

const Editor = () => {
  const {
    state: { table, activeSheetIndex },
    dispatch,
  } = useContext(Context);
  const name = table.getName();
  const sheet = useMemo(() => table.getSheetByIndex(activeSheetIndex), [table]);
  return (
    <StyledEditor>
      <ToolBar></ToolBar>
      <Formula></Formula>
      <Board ></Board>
    </StyledEditor>
  );
};
export default Editor;
