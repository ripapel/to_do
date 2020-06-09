import React from "react";
import { connect } from "react-redux";
import { FC, useEffect } from "react";
import { SafeAreaView, FlatList, Text, StyleSheet } from "react-native";
import { fetchTodos } from "../actions";
import TodoItem from "../components/TodoItem";
import Loader from "../components/Loader";
import { globalStyles } from "../styles/globalStyles";

const TodosList: FC = (props: any) => {
  useEffect(() => {
    const { dispatch } = props;
    dispatch(fetchTodos());
  }, []);

  const { loading, todos } = props;

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={globalStyles.todosContainer}>
      <Text style={globalStyles.title}>My Tasks</Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            id={item.id}
            title={item.title}
            completed={item.completed}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const Todos = connect((state) => {
  return state;
})(TodosList);

export default Todos;
