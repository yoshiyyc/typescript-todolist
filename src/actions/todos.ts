import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

export interface AddTodosAction {
  type: ActionTypes.addTodos;
  payload: number;
}

export interface CheckTodosAction {
  type: ActionTypes.checkTodos;
  payload: number;
}
export interface DeleteTodosAction {
  type: ActionTypes.deleteTodos;
  payload: number;
}
export interface DeleteAllTodosAction {
  type: ActionTypes.deleteAllTodos;
  payload: number;
}

export const addTodos = (inputValue: string) => {
  return {
    type: ActionTypes.addTodos,
    payload: inputValue,
  };
};

export const checkTodos = (id: number) => {
  return {
    type: ActionTypes.checkTodos,
    payload: id,
  };
};

export const deleteTodos = (id: number) => {
  return {
    type: ActionTypes.deleteTodos,
    payload: id,
  };
};

export const deleteAllTodos = () => {
  return {
    type: ActionTypes.deleteAllTodos,
  };
};
