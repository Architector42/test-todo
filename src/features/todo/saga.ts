import { call, delay, put } from "redux-saga/effects";

import { ReduxActionTypes } from "./actionTypes";
import { fetchTodosData } from "./api";
import { TodoType } from "./types";

export const fetchTodosSaga = function* () {
  try {
    yield delay(2000);

    const list: TodoType[] = yield call(fetchTodosData);

    yield put({
      type: ReduxActionTypes.FETCH_TODO_LIST_SUCCESS,
      payload: list,
    });
  } catch (error) {
    yield put({
      type: ReduxActionTypes.FETCH_TODO_LIST_ERROR,
      payload: "Error",
    });
  }
};
