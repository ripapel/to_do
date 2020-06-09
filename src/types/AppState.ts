import Todo from "./Todo";

export default interface AppState {
    todos: Todo[],
    loading: boolean,
    error: boolean
}