import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Call from "../screens/Call";

const Stack = createStackNavigator();

const CallNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Chatlist"
      component={Call}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default CallNavigator;
