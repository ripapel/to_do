import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/atoms/PrimaryButton";
import * as RootNavigation from "../navigation/RootNavigation";

const Home: FC = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.textLarge}>Todo List!</Text>
      <PrimaryButton onPress={() => RootNavigation.navigate("Todos", {})}>
        Próximo
      </PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
    flex: 1,
    justifyContent: "center",
  },

  textLarge: {
    fontSize: 80,
    marginBottom: 30,
    color: "rgb(60, 103, 110)",
  },
});

export default Home;
