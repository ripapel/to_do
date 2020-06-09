import {
    REQUEST_TODOS,
    REQUEST_TODOS_FAILED,
    REQUEST_TODOS_SUCCEEDED,
    TOGGLE_TODO
} from '../actions';

const initialState = {
    todos: [],
    loading: false,
    error: false,
}

export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case REQUEST_TODOS:
            return {
                todos: [],
                loading: true,
                error: false,
            };
        case REQUEST_TODOS_SUCCEEDED:
            return {
                todos: action.todos,
                loading: false,
                error: false,
            };
        case REQUEST_TODOS_FAILED:
            return {
                todos: [],
                loading: false,
                error: true,
            };
        case TOGGLE_TODO:
            return state.todos.map((todo: any) =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return state;
    }
}