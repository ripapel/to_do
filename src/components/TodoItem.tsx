import React, { FC } from "react";
import { View, Text } from "react-native";
import { CheckBox } from "react-native-elements";
import { globalStyles } from "../styles/globalStyles";

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem: FC<TodoItemProps> = (props) => {
  const { title, completed } = props;

  return (
    <View style={globalStyles.todoItem}>
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

export default TodoItem;
