import React, { useCallback, useContext, useMemo, useState } from "react";
import Context from "@/store";
import Cell from "./Cell";
import { Index } from "excelts/dist/interface";
import Input from "./Input";
import { Board } from "./styled";
import useVirtualTable from "@/common/hooks/useVirtualTable";
import { Cell as CellType } from "excelts";
interface Props {
  BoardRef: React.Ref<HTMLElement>;
}
const DataCellsBoard = ({ BoardRef }: Props) => {
  const {
    state: { table, activeSheetIndex },
    dispatch,
  } = useContext(Context);
  const sheet = useMemo(() => table.getSheetByIndex(activeSheetIndex), [table]);
  const allCells = useMemo(() => sheet.getDataCells(), [sheet]);
  const { list: cells, wrapperProps } = useVirtualTable<CellType>(
    allCells,
    BoardRef,
    {
      rowHeight: (index) => {
        return sheet.getRowHeight(index);
      },
      colWidth: (index) => {
        return sheet.getColWidth(index);
      },
    },
  );
  const [editIndex, setEditIndex] = useState<Index>();
  const editCell = useMemo(() => {
    if (editIndex) {
      return sheet.findCell(editIndex.row - 0, editIndex.col - 0);
    }
    return null;
  }, [sheet, editIndex]);
  const getCellIndex = useCallback(
    (evt) => {
      const index = evt.target.dataset;
      if (index.row) {
        return setEditIndex({ row: index.row - 0, col: index.col - 0 });
      }
      return setEditIndex(null);
    },
    [sheet],
  );
  const onClick = (evt) => {
    getCellIndex(evt);
  };
  return (
    <Board ref={BoardRef} onClick={onClick}>
      <div {...wrapperProps}>
        {cells.map((row, index) => {
          return row.map((cell, index) => {
            return <Cell cell={cell} key={cell.getId()} />;
          });
        })}
      </div>
      {editCell && <Input cell={editCell} />}
    </Board>
  );
};
export default DataCellsBoard;
