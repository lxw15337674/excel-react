import Workbook from "excelts";

export interface State {
  table: Workbook;
  activeSheetIndex: number;
}
export type Dispatch<A> = (value: A) => void;

export type Action = { type: "fresh" } ;

export default interface Context {
  state: State;
  dispatch: Dispatch<Action>;
}
