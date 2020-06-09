import React from "react";
import reducer from "../reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchFetchTodo } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchTodo);

export default function Store(props: any) {
  return <Provider store={store}>{props.children}</Provider>;
}
