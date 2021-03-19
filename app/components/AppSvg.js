import React from "react";
import { View, StyleSheet } from "react-native";

function AppSvg({ width, height, iconName }) {
  return (
    <View style={[styles.container, { width: width, height: height }]}>
      {iconName}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppSvg;
