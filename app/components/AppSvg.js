import React from "react";
import { View, StyleSheet } from "react-native";

function AppSvg({ width, height, iconName, style }) {
  return (
    <View style={[styles.container, { width: width, height: height }, style]}>
      {iconName}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppSvg;
