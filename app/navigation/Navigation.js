import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Search from "../../assets/search.svg";
import CallSvg from "../../assets/calls.svg";
import ChatSvg from "../../assets/chats.svg";
import ContactSvg from "../../assets/contacts.svg";
import SettingSvg from "../../assets/settings.svg";
import AddSvg from "../../assets/add.svg";
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
    <ChatStack.Navigator headerMode="none">
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
    <SettingStack.Navigator>
      <SettingStack.Screen name="Setting" component={Setting} />
    </SettingStack.Navigator>
  );
}

function CallStackScreen() {
  return (
    <CallStack.Navigator headerMode="none">
      <CallStack.Screen name="Call" component={Call} />
    </CallStack.Navigator>
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
        <Tab.Screen
          name="Chat"
          component={ChatStackScreen}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: () => <ChatSvg />,
          }}
        />
        <Tab.Screen
          name="Call"
          component={CallStackScreen}
          options={{
            tabBarIcon: () => <CallSvg />,
          }}
        />
        <Tab.Screen
          name="User"
          component={UserStackScreen}
          options={{
            tabBarIcon: () => <ContactSvg />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingStackScreen}
          options={{
            tabBarIcon: () => <SettingSvg />,
          }}
        />

        <Tab.Screen
          name="Add"
          component={AddStackScreen}
          options={{
            tabBarIcon: () => <AddSvg />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
