import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatList from "../screens/ChatList";
import Chat from "../screens/Chat";
import User from "../screens/User";
import Setting from "../screens/Setting";
import Call from "../screens/Call";
import Add from "../screens/Add";

const ChatStack = createStackNavigator();
const UserStack = createStackNavigator();
const SettingStack = createStackNavigator();
const CallStack = createStackNavigator();
const AddStack = createStackNavigator();

function ChatStackScreen() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name="Chatlist" component={ChatList} />
      <ChatStack.Screen name="Chat" component={Chat} />
    </ChatStack.Navigator>
  );
}

function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="User" component={User} />
    </UserStack.Navigator>
  );
}

function SettingStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingStack.Screen name="Setting" component={Setting} />
    </SettingsStack.Navigator>
  );
}

function CallStackScreen() {
  return (
    <SettingsStack.Navigator>
      <CallStack.Screen name="Call" component={Call} />
    </SettingsStack.Navigator>
  );
}

function AddStackScreen() {
  return (
    <AddStack.Navigator>
      <AddStack.Screen name="Setting" component={Add} />
    </AddStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Chat" component={ChatStackScreen} />
        <Tab.Screen name="Settings" component={SettingStackScreen} />
        <Tab.Screen name="User" component={UserStackScreen} />
        <Tab.Screen name="Call" component={CallStackScreen} />
        <Tab.Screen name="Add" component={AddStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
