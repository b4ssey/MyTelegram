import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Setting from "../screens/Setting";

const Stack = createStackNavigator();

const SettingNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Setting" component={Setting} />
  </Stack.Navigator>
);

export default SettingNavigator;
