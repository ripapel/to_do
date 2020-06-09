import React, { FC } from "react";
import { View, ActivityIndicator } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const Loader: FC = () => {
  return (
    <View style={globalStyles.loaderContainer}>
      <ActivityIndicator size="large" color="rgb(60, 103, 110)" />
    </View>
  );
};

export default Loader;
