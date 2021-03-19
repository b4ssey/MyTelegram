import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

function SAV({ children }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    paddingHorizontal: "6.5217%",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default SAV;
