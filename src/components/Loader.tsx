import React, { FC } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loader: FC = () => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="rgb(60, 103, 110)" />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
