import Context from "@/store";
import React, { useContext, useState } from "react";
import { StyledHeader } from "./styled";
const Header = (props) => {
  const {
    state: { table },
    dispatch,
  } = useContext(Context);
  const name = table.getName()
  return (
    <StyledHeader>
      <div>{name}</div>
    </StyledHeader>
  );
};
export default Header;
