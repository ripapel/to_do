import { put, call, takeEvery } from "redux-saga/effects";

import getTodos from "../services/api";
import { FETCH_TODOS, requestTodos, requestTodosSuccess, requestTodosFailed } from "../actions";

export function* watchFetchTodo() {
    yield takeEvery(FETCH_TODOS, fetchTodosAsync);
}

function* fetchTodosAsync(): any {
    try {
        yield put(requestTodos());
        const data = yield call(getTodos);
        yield put(requestTodosSuccess(data));
    } catch (error) {
        yield put(requestTodosFailed());
    }
}