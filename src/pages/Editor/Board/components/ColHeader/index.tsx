import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import Context from "@/store";
import ColHeaderCell from "./ColHeaderCell";
import { StyledHeader, ColIndexHeader, VertAxis } from "./styled";
import PlaceHolderCell from "./PlaceHolderCell";
import { once } from "@/common/utils/dom";

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

  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [resizeIndex, setResizeIndex] = useState<number>(-1);
  const axisRef = useRef<HTMLElement>();
  function handleOnMouseMove(evt) {
    const left = sheet.getColLeft(resizeIndex);
    if (evt.pageX < left) {
      return;
    }
    axisRef.current.style.left = `${evt.pageX}px`;
  }
  function handleOnMouseUp(evt) {
    setIsResizing(false);
    const axis = axisRef.current;
    axis.style.display = "";
    document.body.style.cursor = "";
    // let height = evt.pageY - vue.store.startY + currentHeight;
    // vue.rowsHeader[index].height =
    //   height > vue.cellMinHeight ? height : vue.cellMinHeight;
    window.removeEventListener("mousemove", handleOnMouseMove);
  }
  const startMove = (evt, index) => {
    const axis = axisRef.current;
    evt.preventDefault();
    setIsResizing(true);
    setResizeIndex(index);
    handleOnMouseMove(evt);
    document.body.style.cursor = "e-resize";
    axis.style.display = "block";
    window.addEventListener("mousemove", handleOnMouseMove);
    once(window, "mouseup", handleOnMouseUp);
  };
  useEffect(() => {
    if (isResizing) {
    }
  }, [isResizing]);

  return (
    <>
      <StyledHeader height={cells[0].height}>
        <PlaceHolderCell />
        <ColIndexHeader ref={colHeaderRef}>
          {cells.map((item) => {
            return (
              <ColHeaderCell
                {...item}
                key={item.id++}
                resizeClick={startMove}
              />
            );
          })}
        </ColIndexHeader>
      </StyledHeader>
      <VertAxis ref={axisRef}></VertAxis>
    </>
  );
};
export default ColHeader;
