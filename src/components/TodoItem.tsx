import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem: FC<TodoItemProps> = (props) => {
  const { id, title, completed } = props;

  return (
    <View style={styles.todoItem}>
      <CheckBox
        title=""
        checked={completed}
        checkedColor={"rgb(60, 103, 110)"}
      />
      <Text
        ellipsizeMode="clip"
        numberOfLines={5}
        style={completed ? { textDecorationLine: "line-through" } : {}}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    paddingVertical: 5,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    alignItems: "center",
    color: "rgb(60, 103, 110)",
  },
});

export default TodoItem;
