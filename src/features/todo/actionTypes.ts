import { TodoType } from "./types";

export enum ReduxActionTypes {
  FETCH_TODOS_LIST = "FETCH_TODO_LIST",
  FETCH_TODO_LIST_SUCCESS = "FETCH_TODO_LIST_SUCCESS",
  FETCH_TODO_LIST_ERROR = "FETCH_TODO_LIST_ERROR",

  ADD_TODO = "ADD_TODO",
  EDIT_TODO = "EDIT_TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

export interface FetchTodoListDataAction {
  type: ReduxActionTypes.FETCH_TODOS_LIST;
}

export interface FetchTodoListDataSuccessAction {
  type: ReduxActionTypes.FETCH_TODO_LIST_SUCCESS;
  payload: TodoType[];
}

export interface FetchTodoListDataErrorAction {
  type: ReduxActionTypes.FETCH_TODO_LIST_ERROR;
  error: string;
}

export type ADD_TODO_ACTION = {
  type: ReduxActionTypes.ADD_TODO;
  payload: TodoType;
};

export type EDIT_TODO_ACTION = {
  type: ReduxActionTypes.EDIT_TODO;
  payload: TodoType;
};

export type REMOVE_TODO_ACTION = {
  type: ReduxActionTypes.REMOVE_TODO;
  payload: { id: string };
};

export type ActionTypes =
  | FetchTodoListDataAction
  | FetchTodoListDataSuccessAction
  | FetchTodoListDataErrorAction
  | ADD_TODO_ACTION
  | EDIT_TODO_ACTION
  | REMOVE_TODO_ACTION;
