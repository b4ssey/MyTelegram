import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Add from "../screens/Add";

const Stack = createStackNavigator();

const AddNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="New Message"
      component={Add}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AddNavigator;
