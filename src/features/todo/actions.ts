import { generateId } from "../../common/helpers/generateId";
import { ReduxActionTypes } from "./actionTypes";
import { TodoType } from "./types";

export const fetchTodoList = () => {
  return {
    type: ReduxActionTypes.FETCH_TODOS_LIST,
  };
};

export const addTodo = (name: string) => {
  return {
    type: ReduxActionTypes.ADD_TODO,
    payload: { id: generateId(), name },
  };
};

export const editTodo = (todo: TodoType) => {
  return { type: ReduxActionTypes.EDIT_TODO, payload: todo };
};

export const removeTodo = (id: string) => {
  return {
    type: ReduxActionTypes.REMOVE_TODO,
    payload: { id },
  };
};
