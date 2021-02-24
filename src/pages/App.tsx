import Context, { Reducer } from "@/store";
import "./../assets/scss/App.scss";
import Editor from "./Editor";
import Header from "./Header";
import SheetBar from "./SheetBar";
import React from "react";

export default () => {
  const [state, dispatch] = Reducer();
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="app">
        <Header></Header>
        <Editor></Editor>
        <SheetBar></SheetBar>
      </div>
    </Context.Provider>
  );
};
