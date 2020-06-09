import "react-native-gesture-handler";
import React from "react";

import StackNavigator from "./routes/StackNavigator";
import Store from "./stores";

export default function App() {
  return (
    <Store>
      <StackNavigator />
    </Store>
  );
}
