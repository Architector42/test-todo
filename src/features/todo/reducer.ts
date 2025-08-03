import { ActionTypes, ReduxActionTypes } from "./actionTypes";
import { TodoType } from "./types";

export interface ApiDataFetchInitialState {
  list: TodoType[];
  loading: boolean;
  error: string | null;
}

const InitialValues: ApiDataFetchInitialState = {
  list: [],
  loading: false,
  error: null,
};

export const todoReducer = (
  state: ApiDataFetchInitialState = InitialValues,
  action: ActionTypes
): ApiDataFetchInitialState => {
  switch (action.type) {
    case ReduxActionTypes.FETCH_TODOS_LIST:
      return { ...state, loading: true };

    case ReduxActionTypes.FETCH_TODO_LIST_SUCCESS:
      return { ...state, loading: false, list: action.payload };

    case ReduxActionTypes.FETCH_TODO_LIST_ERROR:
      return { ...state, loading: false, error: action.error };

    case ReduxActionTypes.ADD_TODO:
      return {
        ...state,
        list: [action.payload, ...state.list],
      };

    case ReduxActionTypes.EDIT_TODO:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case ReduxActionTypes.REMOVE_TODO:
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== action.payload.id),
      };

    default:
      return state;
  }
};
