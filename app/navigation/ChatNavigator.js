import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatList from "../screens/ChatList";
import Chat from "../screens/Chat";

const Stack = createStackNavigator();

const ChatNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Chatlist"
      component={ChatList}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Chat" component={Chat} />
  </Stack.Navigator>
);

export default ChatNavigator;
