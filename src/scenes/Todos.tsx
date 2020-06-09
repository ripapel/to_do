import React from "react";
import { connect } from "react-redux";
import { FC, useEffect } from "react";
import { SafeAreaView, FlatList, Text, StyleSheet } from "react-native";
import { fetchTodos } from "../actions";
import TodoItem from "../components/TodoItem";
import Loader from "../components/Loader";

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
    <SafeAreaView style={styles.tasksContainer}>
      <Text style={styles.title}>My Tasks</Text>
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

const styles = StyleSheet.create({
  tasksContainer: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 35,
    color: "rgb(60, 103, 110)",
    marginBottom: 10,
  },
});

const Todos = connect((state) => {
  console.log(state);
  return state;
})(TodosList);

export default Todos;
