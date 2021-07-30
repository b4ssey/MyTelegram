import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import AddNavigator from "./AddNavigator";
import CallNavigator from "./CallNavigator";
import ChatNavigator from "./ChatNavigator";
import SettingNavigator from "./SettingNavigator";
import UserNavigator from "./UserNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Chatlist"
      component={ChatNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="chatbox" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="User"
      component={UserNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="md-person" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Setting"
      component={SettingNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="settings-sharp" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Call"
      component={CallNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="call" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Add"
      component={AddNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="add-circle" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default AppNavigator;
