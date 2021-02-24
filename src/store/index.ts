import excel from "excelts";
import React, { useEffect, useMemo, useReducer } from "react";
import Context, { Action, State } from "./interface";

const initialState: State = {
  table: new excel(),
  activeSheetIndex: 0,
};
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "fresh":
      return { ...state };
    default:
      throw new Error("Unhandled action type");
  }
};
export function Reducer(): [State, React.Dispatch<Action>] {
  let [state, dispatch] = useReducer(reducer, initialState);
  state = useMemo(() => {
    const table = new Proxy(state.table, {
      set(target, key, value) {
        Reflect.set(target, key, value);
        dispatch({ type: "fresh" });
        return true;
      },
    });
    return { ...state, table };
  }, []);
  return [state, dispatch];
}

export default React.createContext<Partial<Context>>({});
