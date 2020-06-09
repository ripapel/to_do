import React, { FC } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface PrimaryButtonProps {
  onPress: Function;
  children: any;
}

const PrimaryButton: FC<PrimaryButtonProps> = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(60, 103, 110)",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 7,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 18,
    color: "white",
  },
});

export default PrimaryButton;
