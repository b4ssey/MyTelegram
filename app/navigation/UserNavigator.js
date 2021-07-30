import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import User from "../screens/User";

const Stack = createStackNavigator();

const UserNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="User" component={User} />
  </Stack.Navigator>
);

export default UserNavigator;
