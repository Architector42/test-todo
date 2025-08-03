import { all, takeEvery } from "redux-saga/effects";

import { fetchTodosSaga, ReduxActionTypes } from "../features/todo";

function* watchFetchTodos() {
  yield takeEvery(ReduxActionTypes.FETCH_TODOS_LIST, fetchTodosSaga);
}

export default function* rootSaga() {
  yield all([watchFetchTodos()]);
}
