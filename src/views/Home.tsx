import React, { FC } from "react";
import { View, Text } from "react-native";
import * as RootNavigation from "../routes/RootNavigation";
import { Button } from "react-native-elements";

import { globalStyles } from "../styles/globalStyles";

const Home: FC = () => {
  return (
    <View style={globalStyles.homeRoot}>
      <Text style={globalStyles.textLarge}>Todo List!</Text>
      <Button
        style={{
          ...globalStyles.primaryButton,
          ...globalStyles.primaryButtonText,
        }}
        onPress={() => RootNavigation.navigate("Todos", {})}
      >
        Próximo
      </Button>
    </View>
  );
};

export default Home;
