import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";

const FETCH_TODOS = "FETCH_TODOS";
export const REQUEST_TODOS = "REQUEST_TODOS";
export const REQUEST_TODOS_SUCCEEDED = "REQUEST_TODOS_SUCCEEDED";
export const REQUEST_TODOS_FAILED = "REQUEST_TODOS_FAILED";
export const TOGGLE_TODO = "TOGGLE_TODO";

interface Todo {
    id: number,
    title: string,
    completed: boolean
}

//action creators
const requestTodos = () => {
    return { type: REQUEST_TODOS };
};

const requestTodosSuccess = (data: Todo[]) => {
    return { type: REQUEST_TODOS_SUCCEEDED, todos: data };
};

const requestTodosFailed = () => {
    return { type: REQUEST_TODOS_FAILED }
}

export const fetchTodos = () => {
    return { type: FETCH_TODOS };
};

export const toggleTodo = (id: number) => {
    return { type: TOGGLE_TODO, id };
};

//Sagas

export function* watchFetchTodo() {
    yield takeEvery(FETCH_TODOS, fetchTodosAsync);
}

function* fetchTodosAsync() {
    try {
        yield put(requestTodos());
        const data = yield call(async () => {
            const res = await axios("https://jsonplaceholder.typicode.com/todos/");
            return res.data;
        });
        yield put(requestTodosSuccess(data));
    } catch (error) {
        yield put(requestTodosFailed());
    }
}