import {
  AddTodosAction,
  CheckTodosAction,
  DeleteTodosAction,
  DeleteAllTodosAction,
} from "./todos";

export enum ActionTypes {
  addTodos,
  checkTodos,
  deleteTodos,
  deleteAllTodos,
}

export type Action =
  | AddTodosAction
  | CheckTodosAction
  | DeleteTodosAction
  | DeleteAllTodosAction;
