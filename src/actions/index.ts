import Todo from '../types/Todo';
export const FETCH_TODOS = "FETCH_TODOS";
export const REQUEST_TODOS = "REQUEST_TODOS";
export const REQUEST_TODOS_SUCCEEDED = "REQUEST_TODOS_SUCCEEDED";
export const REQUEST_TODOS_FAILED = "REQUEST_TODOS_FAILED";

//action creators
export const requestTodos = () => {
    return { type: REQUEST_TODOS };
};

export const requestTodosSuccess = (data: Todo[]) => {
    return { type: REQUEST_TODOS_SUCCEEDED, todos: data };
};

export const requestTodosFailed = () => {
    return { type: REQUEST_TODOS_FAILED }
}

export const fetchTodos = () => {
    return { type: FETCH_TODOS };
};



