import { combineReducers } from "redux";

import { todoReducer } from "../features/todo";

export const rootReducer = combineReducers({
  todoList: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
