import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  SpaceMono_400Regular,
  SpaceMono_700Bold,
} from "@expo-google-fonts/space-mono";
import ChatList from "./app/screens/ChatList";

export default function App() {
  let [fontLoaded] = useFonts({ SpaceMono_400Regular, SpaceMono_700Bold });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    // <View style={styles.container}>
    //   <Text style={{ fontFamily: "SpaceMono_400Regular" }}>
    //     Open up App.js to start working on your app!
    //   </Text>
    //   <StatusBar style="auto" />
    // </View>
    <ChatList />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
