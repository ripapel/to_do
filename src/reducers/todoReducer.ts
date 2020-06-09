import {
    REQUEST_TODOS,
    REQUEST_TODOS_FAILED,
    REQUEST_TODOS_SUCCEEDED,
} from "../actions";
import AppState from "../types/AppState";



const initialState: AppState = {
    todos: [],
    loading: false,
    error: false,
}

export default function reducer(state = initialState, action: any): AppState {
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
            };;
        default:
            return state;
    }
}