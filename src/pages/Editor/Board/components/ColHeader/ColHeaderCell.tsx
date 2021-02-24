import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { HeaderCell as Props } from "excelts/dist/interface";
import { BaseCell } from "../../styled";

const StyledCell = styled(BaseCell)`
  display: inline-block;
`;

const HeaderCell = ({ id, index, value, top, left, ...style }: Props) => {
  return (
    <StyledCell style={style} data-index={index}>
      {value}
    </StyledCell>
  );
};
export default HeaderCell;
