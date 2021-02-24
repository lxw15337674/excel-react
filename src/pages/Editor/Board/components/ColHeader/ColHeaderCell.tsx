import React, { useEffect, useMemo, useState } from "react";
import { HeaderCell as Header } from "excelts/dist/interface";
import { BaseCell } from "../../styled";
import { ResizableContent } from "./styled";

interface Props extends Header {
  resizeClick: (e, index) => void;
}
const HeaderCell = ({
  id,
  index,
  value,
  top,
  left,
  resizeClick,
  ...style
}: Props) => {
  const onMouseDown = (e) => {
    resizeClick(e, index);
  };
  return (
    <div className="inline-block relative">
      <BaseCell
        className="inline-block relative"
        style={style}
        data-index={index}
      >
        {value}
      </BaseCell>
      <ResizableContent onMouseDown={onMouseDown}></ResizableContent>
    </div>
  );
};
export default HeaderCell;
